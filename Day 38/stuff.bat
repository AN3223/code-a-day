@echo off

goto helloworld

echo "Goodbye world"
This line gets skipped!

:helloworld
echo "Hello world"

if "a" == "a" (
	echo "a == a"
)

if 12 equ 12 (
	echo "12 equals 12"
)

call :add_one 5
echo %result%

:add_one
setlocal
endlocal & set /a result=%1 + 1
goto :eof

Emulates a function
