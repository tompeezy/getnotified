cd $HOME\getnotified

$file = "components\Packages.tsx"

$content = Get-Content $file -Raw

$content = $content -replace "â€¢","-"
$content = $content -replace "Â",""
$content = $content -replace "one-time  installed","one-time installed"
$content = $content -replace "one-time fee â€“ no subscription","one-time fee - no subscription"
$content = $content -replace "â€“","-"

[System.IO.File]::WriteAllText($file,$content,(New-Object System.Text.UTF8Encoding($false)))

git add .
git commit -m "Fix package encoding characters"
git push

Start-Process "https://getnotifiedllc.com"
Start-Process "https://vercel.com/tompeezys-projects"