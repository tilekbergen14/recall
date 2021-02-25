export default function Theme() {
  return (
    <>
      <div
        className="themereview theme0 pointer"
        onClick={() => {
          localStorage.setItem("theme", "default");
          document.documentElement.setAttribute("data-theme", "default");
        }}
      ></div>
      <div
        className="themereview theme1 pointer"
        onClick={() => {
          localStorage.setItem("theme", "theme1");
          document.documentElement.setAttribute("data-theme", "theme1");
        }}
      ></div>
      <div
        className="themereview theme2 pointer"
        onClick={() => {
          localStorage.setItem("theme", "theme2");
          document.documentElement.setAttribute("data-theme", "theme2");
        }}
      ></div>
      <div
        className="themereview theme3 pointer"
        onClick={() => {
          localStorage.setItem("theme", "theme3");
          document.documentElement.setAttribute("data-theme", "theme3");
        }}
      ></div>
      <div
        className="themereview theme4 pointer"
        onClick={() => {
          localStorage.setItem("theme", "theme4");
          document.documentElement.setAttribute("data-theme", "theme4");
        }}
      ></div>
      <div
        className="themereview theme5 pointer"
        onClick={() => {
          localStorage.setItem("theme", "theme5");
          document.documentElement.setAttribute("data-theme", "theme5");
        }}
      ></div>
      <div
        className="themereview theme6 pointer"
        onClick={() => {
          localStorage.setItem("theme", "theme6");
          document.documentElement.setAttribute("data-theme", "theme6");
        }}
      ></div>
      <div
        className="themereview theme7 pointer"
        onClick={() => {
          localStorage.setItem("theme", "theme7");
          document.documentElement.setAttribute("data-theme", "theme7");
        }}
      ></div>
      <div
        className="themereview theme8 pointer"
        onClick={() => {
          localStorage.setItem("theme", "theme8");
          document.documentElement.setAttribute("data-theme", "theme8");
        }}
      ></div>
    </>
  );
}
