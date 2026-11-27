// Update these two links with your real profiles
const LINKS = { li: "https://www.linkedin.com/in/YOUR-HANDLE", gh: "https://github.com/YOUR-HANDLE" };
document.getElementById("li").href = LINKS.li;
document.getElementById("gh").href = LINKS.gh;
document.getElementById("yr").textContent = new Date().getFullYear();

const INFO = {
  cfn: "CloudFormation defines the whole environment as a template, so it can be rebuilt the same way every time.",
  vpc: "Amazon VPC: an isolated network I divided into public and private subnets.",
  pub: "Public subnet: holds the web-facing EC2 instance that accepts traffic from the internet.",
  priv: "Private subnet: holds the application EC2 instance, reachable only from inside the VPC.",
  s3: "S3 bucket with server-side encryption on and public access blocked."
};
const cap = document.getElementById("cap");
const nodes = document.querySelectorAll(".node");
function show(n){
  nodes.forEach(x => x.classList.remove("on"));
  n.classList.add("on");
  cap.textContent = INFO[n.dataset.k];
}
nodes.forEach(n => {
  n.addEventListener("click", e => { e.stopPropagation(); show(n); });
  n.addEventListener("focus", () => show(n));
  n.addEventListener("keydown", e => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); show(n); } });
});
