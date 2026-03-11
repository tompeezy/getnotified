cd $HOME\getnotified

$file = "$HOME\getnotified\components\Packages.tsx"

$content = Get-Content $file -Raw

$content = [regex]::Replace($content, '[^\x00-\x7F]', '')
$content = $content -replace 'one-time  installed','one-time installed'
$content = $content -replace 'fee  no subscription','fee - no subscription'
$content = $content -replace '  no cloud',' - no cloud'
$content = $content -replace 'A installed','installed'

$utf8 = New-Object System.Text.UTF8Encoding($false)
[System.IO.File]::WriteAllText($file, $content, $utf8)

git add .
git commit -m 'Strip bad package characters'
git push

Start-Process 'https://getnotifiedllc.com'