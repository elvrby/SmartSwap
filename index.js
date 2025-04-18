document.querySelectorAll("#tokenDropdownBtn + .dropdown-menu .dropdown-item").forEach((item) => {
  item.addEventListener("click", (e) => {
    e.preventDefault();

    const btn = document.getElementById("tokenDropdownBtn");

    // Ambil elemen-elemen yang ingin diganti teksnya
    const tokenText = btn.querySelector(".token-text");
    const tokenSub = btn.querySelector(".token-sub");

    // Ambil konten dari item dropdown yang diklik
    const selectedToken = item.querySelector("span").textContent;
    const selectedSub = item.querySelector("small").textContent;

    // Update isi teks-nya saja
    tokenText.textContent = selectedToken;
    tokenSub.textContent = selectedSub;

    // Simpan value terpilih
    btn.setAttribute("data-selected", item.dataset.value);
  });
});

document.querySelectorAll("#tokenDropdownBtnSend + .dropdown-menu .dropdown-item").forEach((item) => {
  item.addEventListener("click", (e) => {
    e.preventDefault();

    const btn = document.getElementById("tokenDropdownBtnSend");

    // Ambil elemen token
    const tokenText = btn.querySelector(".token-text");
    const tokenSub = btn.querySelector(".token-sub");

    // Update isinya
    tokenText.textContent = item.querySelector("span").textContent;
    tokenSub.textContent = item.querySelector("small").textContent;

    // Simpan data terpilih
    btn.setAttribute("data-selected", item.dataset.value);
  });
});
