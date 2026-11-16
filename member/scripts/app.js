import { Member } from './types/member.js';

class Main
{
    constructor()
    {
        this.memberHolder = document.getElementById('member-holder');
        this.departmentFilter = document.getElementById('department-filter');
        this.members = [];
    }

    async Initialize()
    {
        const teamFile = await fetch('./data/team.json');
        const teamData = await teamFile.json();

        this.members = teamData.map((memberData) => new Member(
            memberData.name,
            memberData.position,
            memberData.department,
            memberData.availability
        ));

        const departments = [...new Set(this.members.map((member) => member.department))];
        departments.forEach((department) => {
            const option = document.createElement('option');
            option.value = department;
            option.textContent = department;
            this.departmentFilter.appendChild(option);
        });

        this.departmentFilter.addEventListener('change', () => this.render());
        this.render();
    }

    render()
    {
        const selectedDepartment = this.departmentFilter.value;
        const membersToRender = selectedDepartment
            ? this.members.filter((member) => member.department === selectedDepartment)
            : this.members;

        this.memberHolder.replaceChildren();
        membersToRender.forEach((member) => {
            member.Render(this.memberHolder);
        });
    }
}

const app = new Main();
app.Initialize();
