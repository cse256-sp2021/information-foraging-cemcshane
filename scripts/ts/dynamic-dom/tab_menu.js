export function setupTabMenu() {
    let tabs = document.querySelectorAll('.tm-tab');
    let headers = document.querySelectorAll(".tab-menu .navbar a");
    function clickTab(index) {
        tabs.forEach(function(value, i) {
            value.classList.remove("selected-content");
            headers[i].classList.remove("selected");
        })
        tabs[index].classList.add("selected-content");
        headers[index].classList.add("selected");
    }
    document.querySelectorAll('.tab-menu .navbar a').forEach(function(val, i) {
        val.addEventListener("click", function() {
            clickTab(i);
        });
    });
}