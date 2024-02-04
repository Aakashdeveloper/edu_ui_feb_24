Document Object Model

document.getElementsByClassName('')
HTMLCollection []
document.getElementsByTagName('')
HTMLCollection []
document.getElementById('')
null


document.getElementsByTagName('h1')
HTMLCollection [h1]
document.getElementsByTagName('a')
HTMLCollection(24) [a, a, a, a, a, a, a, a, a, a.scroll, a.scroll, a.scroll, a.scroll, a.scroll, a, a, a, a, a, a, a, a, a, a#toTop, toTop: a#toTop]0: a1: a2: a3: a4: a5: a6: a7: a8: a9: a.scroll10: a.scroll11: a.scroll12: a.scroll13: a.scroll14: a15: a16: a17: a18: a19: a20: a21: a22: a23: a#toToptoTop: a#toToplength: 24[[Prototype]]: HTMLCollection
document.getElementsByTagName('h1')[0]
<h1>​I'm AAKASH HANDA​</h1>​
document.getElementsByTagName('h1')[0].innerText = "I m from Edureka"
'I m from Edureka'
document.getElementsByClassName('scroll')
HTMLCollection(5) [a.scroll, a.scroll, a.scroll, a.scroll, a.scroll]0: a.scroll1: a.scroll2: a.scroll3: a.scroll4: a.scrolllength: 5[[Prototype]]: HTMLCollection
document.getElementsByClassName('scroll')[1].innerText
'Youtube'
document.getElementsByClassName('scroll')[1].innerText="Video"
'Video'
document.getElementsByClassName('scroll')[1].style.color="red"
'red'
document.getElementsByClassName('scroll')[1].style.visibility="hidden"
'hidden'