cd $HOME\getnotified

$file = Join-Path $HOME "getnotified\components\Packages.tsx"

$content = Get-Content $file -Raw

$content = $content -replace "â€¢","-"
$content = $content -replace "Â",""
$content = $content -replace "â€“","-"
$content = $content -replace "one-time  installed","one-time installed"
$content = $content -replace "one-time fee - no subscription","one-time fee - no subscription"

$utf8NoBom = New-Object System.Text.UTF8Encoding($false)
[System.IO.File]::WriteAllText($file, $content, $utf8NoBom)

git add .
git commit -m "Fix package encoding characters"
git push

Start-Process "https://getnotifiedllc.com"
Start-Process "https://vercel.com/tompeezys-projects"