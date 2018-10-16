from sqlalchemy import create_engine
from argparse import ArgumentParser
import pandas as pd
import os.path


def get_filename(path):
    """Returns the filename for a given path"""
    try:
        return os.path.split(path)[1]
    except IndexError:
        return path


def get_file_extension(filename):
    """
    Gets the final file extension from a filename, raises ValueError if there is no file extension.
    """
    split = filename.split('.')
    if len(split) < 2:
        raise ValueError("No file extension")
    return split[-1]


def to_dataframe(path, override=None):
    """
    Converts a file to a dataframe. Infers file type from the extension.
    """

    if override is not None:
        extension = override
    else:
        extension = get_file_extension(get_filename(path))

    if extension == 'csv':
        return pd.read_csv(path)
    elif extension == 'tsv':
        return pd.read_table(path)
    elif extension == 'json':
        return pd.read_json(path)
    elif extension == 'html':
        return pd.read_html(path)
    elif extension == 'xls':
        return pd.read_excel(path)
    elif extension == 'feather':
        return pd.read_feather(path)
    elif extension == 'msg':
        return pd.read_msgpack(path)
    elif extension == 'pkl':
        return pd.read_pickle(path)


def save(dataframe, path):
    try:
        extension = get_file_extension(get_filename(path))
    except ValueError:  # Defaults to pickle format
        extension = 'pkl'
        path += '.pkl'

    if extension == 'pkl':
        dataframe.to_pickle(path)
    elif extension == 'json':
        dataframe.to_json(path)
    elif extension == 'html':
        dataframe.to_html(path)
    elif extension == 'feather':
        dataframe.to_feather(path)
    elif extension == 'msg':
        dataframe.to_msgpack(path)


# TODO: Add the ability to specify a database URL from the command line
def get_engine(url="sqlite:///:memory:"):
    return create_engine(url, echo=False)


def query(args):
    """Safely gets the query from the parsed args"""
    if args.query:
        return args.query
    elif args.querypath:
        with open(args.querypath) as f:
            return f.read()
    else:
        raise ValueError("No query given")


def parse_args():
    args = ArgumentParser()

    args.add_argument("paths")  # TODO: Add descriptions for all of these
    args.add_argument("--querypath", "-qp")
    args.add_argument("--query", "-q")
    args.add_argument("--save", "-s")
    args.add_argument("--override")

    return args.parse_args()


def main():
    args = parse_args()
    connection = get_engine().connect()

    for path in args.paths.split():
        df = to_dataframe(path)
        df.to_sql(get_filename(path), connection)

    result = pd.read_sql_query(
        query(args), connection
    )

    if args.save:
        save(result, args.save)
    else:
        print(result)


if __name__ == '__main__':
    main()
