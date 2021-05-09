import "./styles.css";
const onClickAdd = () => {
  //テキストボックスの値を取得し、初期化する。
  const inputText = document.getElementById("add-text").value;
  document.getElementById("add-text").value = "";

  createImcompleteList(inputText);
};

//未完了リストに追加する関数
const createImcompleteList = (text) => {
  //div生成
  const div = document.createElement("div");
  div.className = "list-row";

  //li生成
  const li = document.createElement("li");
  li.innerText = text;

  //button(完了)タグの生成
  const complateButton = document.createElement("button");
  complateButton.innerText = "完了";
  complateButton.addEventListener("click", () => {
    //押された完了ボタンの親タグ(div)を未完了リストから削除
    const deleteTarget = complateButton.parentNode;
    document.getElementById("imcomplate-list").removeChild(deleteTarget);

    //todoのテキストを取得
    const addTarget = complateButton.parentNode;
    const text = addTarget.firstElementChild.innerText;

    addTarget.textContent = null;
    // console.log(addTarget);

    //todoの内容のli生成
    const li = document.createElement("li");
    li.innerHTML = text;

    //戻るボタン生成
    const backButton = document.createElement("button");
    backButton.innerText = "戻す";
    backButton.addEventListener("click", () => {
      const deleteTarget = backButton.parentNode;
      document.getElementById("complated-list").removeChild(deleteTarget);

      const addTarget = backButton.parentNode;
      const text = addTarget.firstElementChild.innerText;

      createImcompleteList(text);
    });

    addTarget.appendChild(li);
    addTarget.appendChild(backButton);

    document.getElementById("complated-list").appendChild(addTarget);
  });

  //button(削除)タグの生成
  const deleteButton = document.createElement("button");
  deleteButton.innerText = "削除";
  deleteButton.addEventListener("click", () => {
    //押された削除ボタンの親タグ(div)を未完了リストから削除
    const deleteTarget = deleteButton.parentNode;
    document.getElementById("imcomplate-list").removeChild(deleteTarget);
  });

  //divタグの子要素に各要素を設定
  div.appendChild(li);
  div.appendChild(complateButton);
  div.appendChild(deleteButton);

  //未完了リストに追加
  document.getElementById("imcomplate-list").appendChild(div);
};

document
  .getElementById("add-button")
  .addEventListener("click", () => onClickAdd());
