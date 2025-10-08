@echo off
chcp 65001 >nul
title 🚀 bideben Excel Güncelleme
echo ----------------------------------------------
echo 🚀 bideben Excel Güncelleme Başlatıldı...
echo ----------------------------------------------
cd /d "C:\Users\User\bideben-start"
echo 🔄 Değişiklikler kontrol ediliyor...
git add .
git commit -m "Excel otomatik güncelleme"
echo 🚢 Güncellemeler GitHub'a gönderiliyor...
git push
echo ✅ İşlem tamamlandı! Vercel otomatik olarak yayına alacak.
echo ----------------------------------------------
pause