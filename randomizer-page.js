const teamMembersContainer = document.getElementById("team-members-list");
const selectBtn = document.getElementById("choose-member");
const selectedMember = document.getElementById("selected-member");
const resetBtn = document.getElementById("reset");

let teamList = ["Denys2", "Vasil", "Sergei", "Valera"];

renderTeamList();
selectBtn.addEventListener("click", chooseRandomTeamMember);

function chooseRandomTeamMember() {
  if (!teamList.length) return;

  const index = getRandomIntegerInRange(0, teamList.length - 1);
  const selectedName = getNameByIndex(index);
  teamList.splice(index, 1);
  selectedMember.innerText = teamList.length === 0 ? "Done!" : selectedName;
  renderTeamList();
}

function renderTeamList() {
  const children = teamList.map((name) => {
    const div = document.createElement("div");
    div.innerText = name;
    return div;
  });
  teamMembersContainer.replaceChildren(...children);
}

function getRandomIntegerInRange(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getNameByIndex(index) {
  return teamList[index];
}
