const div = document.querySelector('#div');
window.addEventListener('keyup',(e)=>{
div.innerHTML=    `<table>
<tr>
  <th>Key</th>
  <th>KeyCode</th>
  <th>code</th>
</tr>
<tr>
  <td>${e.key===' '?'space':e.key}</td>
  <td>${e.keyCode}</td>
  <td>${e.code}</td>
</tr>
</table>`
})
