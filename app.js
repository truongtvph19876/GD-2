import data from "./db.json" assert { type: "json" };

// hàm render ra dữ liệu trên bảng
function renderCandidates(data, container) {
  container.innerHTML = data
    .map((item) => {
      return `<tr>
     <td>${item.id}</td>
     <td>${item.fullname}</td>
     <td>${item.birthdate}</td>
     <td>${item.gender}</td>
     <td>${item.identitycard}</td>
     <td>${item.math}</td>
     <td>${item.literature}</td>
     <td>${item.english}</td>
     <td>${item.biology}</td>
     <td>${item.physics}</td>
     <td>${item.history}</td>
     <td>${item.chemistry}</td>
     <td>${item.civiceducation}</td>
     <td>${[
       item.math,
       item.literature,
       item.english,
       item.biology,
       item.physics,
       item.history,
       item.chemistry,
       item.civiceducation,
     ].reduce((total, number) => total + number, 0)}</td>
</tr>`;
    }).join("");
}

const container = document.querySelector("#content");
renderCandidates(data, container);

// search
const search = document.querySelector("#search");

// bắt sự kiện khi người dùng nhập vào input => tìm kiếm giá trị của input trong dữ liệu
search.addEventListener("keyup",(event)=> {

	const value = Number(event.target.value);
	const newData = data.filter((item)=> {
		return (new RegExp(value)).test(item.id);
	});
	renderCandidates(newData, container); 
})
