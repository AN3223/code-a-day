mkdir asdf  # Make a directory

cd asdf  # Set it as the current directory

touch asdf.txt  # Making a new file

cd ..  # cd back to parent directory

tar -c -f asdf.tar asdf  # Create an archive of our directory

rm -r asdf  # Recursively deleting asdf and all of its children

gzip asdf.tar  # asdf.tar becomes a compressed .gz

gzip -d asdf.tar.gz # Decompressing asdf.tar.gz

tar --extract -f asdf.tar  # Unarchiving asdf.tar

rm asdf.tar  # Deleting the tar left behind

rm -r asdf  # Deleting the unarchived directory

helloworld () {  # Function syntax
	echo "Hello world"
}

helloworld  # Calling the function just by mentioning it

args () {
	local arg1=$1  # Local variable syntax
	local arg2=$2  # And argument syntax
	echo $arg1
	# The $ lets Bash know it's a variable
	echo $arg2
}

args 10 20  # Passing arguments
