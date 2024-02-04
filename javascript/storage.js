localStorage
> Presistent Storage
> wrt to browser
> we have to remove manually

localStorage.setItem('myCity','Delhi')
localStorage.getItem('myCity')
'Delhi'
localStorage.removeItem('myCity')
undefined
localStorage.removeItem('mycity')
undefined
localStorage.getItem('myCity')

sessionStorage
> temp Storage
> save wrt to tab
> remove as soon as you close the tab

sessionStorage.setItem('myCity','Delhi')
sessionStorage.getItem('myCity')
'Delhi'
sessionStorage.removeItem('myCity')

sessionStorage.removeItem('mycity')

sessionStorage.getItem('myCity')

cookies
> save wrt to website
> expires in time

document.cookie
'_gid=GA1.2.1152305924.1706949971; city=delhi; _ga_1FJ2RQ09E7=GS1.1.1707013033.2.0.1707013033.0.0.0; _ga=GA1.2.216256209.1706949970; _gat_gtag_UA_131256843_1=1'

document.cookie="token=demo; expires=Mon 5 Feb 2024 13:00:00 UTC"
'token=demo; expires=Mon 5 Feb 2024 13:00:00 UTC'
document.cookie
'_gid=GA1.2.1152305924.1706949971; city=delhi; _ga_1FJ2RQ09E7=GS1.1.1707013033.2.0.1707013033.0.0.0; _ga=GA1.2.216256209.1706949970; token=demo'