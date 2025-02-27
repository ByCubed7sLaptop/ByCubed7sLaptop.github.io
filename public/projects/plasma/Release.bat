@echo off
title Pushing Latest Build!

echo Butler: Pushing to Itchio
butler push "Output/x64/Release" bycubed7/desktop-capybara:windows-charlie --if-changed --userversion-file version.txt

echo Finshed!
title Finshed!

echo .
echo .
echo .

butler status bycubed7/desktop-capybara:windows-beta


pause
exit
pause











echo clearing current:
rmdir /s /q "x64\Release\assets\"

echo Xcopy: Building Asset files
xcopy /E /v /y "Plasma\assets" "x64\Release\assets\"

echo rename: Renaming EXE
del "x64\Release\Desktop Capybara.exe"
rename "x64\Release\Plasma.exe" "Desktop Capybara.exe"

echo -
echo - READY!
echo -
pause

echo Butler: Pushing to Itchio
butler push "x64/Release" bycubed7/desktop-capybara:windows-beta --if-changed --userversion-file version.txt

echo Finshed!
title Finshed!

echo .
echo .
echo .

butler status bycubed7/desktop-capybara:windows-beta

pause