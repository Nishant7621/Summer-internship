let btn = document.querySelector(".btn button");

btn.addEventListener("click", () => {

    let img1 = document.querySelectorAll(".skill-card img")[0];
    let img2 = document.querySelectorAll(".skill-card img")[1];

    // Get src attributes
    let src1 = img1.getAttribute("src");
    let src2 = img2.getAttribute("src");

    // Swap src attributes
    img1.setAttribute("src", src2);
    img2.setAttribute("src", src1);

});