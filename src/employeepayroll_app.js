window.addEventListener('DOMContentLoaded', (event) => {
    createInnerttml();
});
// Template literal ES6 feature
const createInnerhtml = () => {
  const headerHtml = "<th></th><th>Name</th><th>Gender</th><th>Department</th>"+
                      "<th>Salary</th><th>Start Date</th><th>Actions</th>";
  const innerHtml = `${headerHtml}
    <tr>
     <td><img class="profile" src="./Ellipse-2.png" alt=""></td>
     <td>Narayan Mahadevan</td>
     <td>Male</td>
     <td><div class='dept-label'>HR</div><div class='dept-label'>Finance</div></td>
     <td>3000000</ td>
     <td>1 Nov 2020</td>
     <td>
      <img name="1" onclick="remove(this)" src="./delete-black-18dp.svg" alt="delete">
      <img name="1" onclick="update(this)" src="./create-black-18dp.svg" alt="edit">
     </td>
    </tr>
    `;
    document.querySelector('#table-display').innerHTML = innerHtml;
}