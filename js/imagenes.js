//variables para imagenes a seleccionar-----------------------------
const goku=document.querySelector("[alt=Goku]");
const imggoku1=document.createElement('img');
const imggoku2=document.createElement('img');

const veg=document.querySelector("[alt=Vegeta]");
const imgveg1=document.createElement('img');
const imgveg2=document.createElement('img');

const goh=document.querySelector("[alt=Gohan]");
const imggoh1=document.createElement('img');
const imggoh2=document.createElement('img');

imggoku1.src=goku.src;
imggoku2.setAttribute('src',
'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/114004af-e326-47b9-9c34-4403b40fac33/d4r27wh-520dc229-2a36-4c08-99b2-090484e0dced.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzExNDAwNGFmLWUzMjYtNDdiOS05YzM0LTQ0MDNiNDBmYWMzM1wvZDRyMjd3aC01MjBkYzIyOS0yYTM2LTRjMDgtOTliMi0wOTA0ODRlMGRjZWQucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.fs470Iur1s9D3UhQe3JpzE3e8aDsC_f9ksmY-YbiMyQ');

imgveg1.src=veg.src;
imgveg2.setAttribute('src',
'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/4575f0f4-2d97-4410-bbf9-25b2c1d08f31/db5csw7-4ad26c05-c409-4e7e-83a7-fa71e9dd247d.png/v1/fill/w_1024,h_2615,strp/majin_vegeta_by_koku78_db5csw7-fullview.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MjYxNSIsInBhdGgiOiJcL2ZcLzQ1NzVmMGY0LTJkOTctNDQxMC1iYmY5LTI1YjJjMWQwOGYzMVwvZGI1Y3N3Ny00YWQyNmMwNS1jNDA5LTRlN2UtODNhNy1mYTcxZTlkZDI0N2QucG5nIiwid2lkdGgiOiI8PTEwMjQifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.AAInrmgTLN-OyZqUOl6PbMwOSFJMzxBuvOfOQz40rUw')

imggoh1.src=goh.src;
imggoh2.setAttribute('src',
'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/2cb55797-9274-4f5f-a8d4-3aab8f3f9255/d33szss-43ab5cf9-aff9-4105-a72d-308f4fd7017f.png/v1/fill/w_400,h_613,strp/gohan_ssj_z_by_emiyansaiyan_d33szss-fullview.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NjEzIiwicGF0aCI6IlwvZlwvMmNiNTU3OTctOTI3NC00ZjVmLWE4ZDQtM2FhYjhmM2Y5MjU1XC9kMzNzenNzLTQzYWI1Y2Y5LWFmZjktNDEwNS1hNzJkLTMwOGY0ZmQ3MDE3Zi5wbmciLCJ3aWR0aCI6Ijw9NDAwIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.X3nHbUoVySZCS3e7FtpC9Fzs4knobY0MdVphRUnFTdA')
//------------------------------------------------------------------

//imagen Goku
goku.onmouseover=function(){
    goku.src=imggoku2.src;
};
goku.onmouseleave=function(){goku.src=imggoku1.src;};
//imagen Vegeta
veg.onmouseover=function(){
    veg.src=imgveg2.src;
};
veg.onmouseleave=function(){veg.src=imgveg1.src;};
//imagen Gohan
goh.onmouseover=function(){
    goh.src=imggoh2.src;
};
goh.onmouseleave=function(){goh.src=imggoh1.src;};
//------------------------------------------------------------------
