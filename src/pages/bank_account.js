const bankAccountPage = document.createElement("div");
bankAccountPage.className = "bank-account";

const inner = document.createElement("div");
inner.className = "inner";

const content = document.createElement("div");
content.className = "content";
content.textContent = "ëě ęłě˘";

inner.appendChild(content);

bankAccountPage.appendChild(inner);

export default bankAccountPage;
