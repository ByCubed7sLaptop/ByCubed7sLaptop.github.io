function getTimeAbbreviation(date) {
    var d = date.getDate();
    var m = date.getMonth();
    var y = date.getFullYear();
    var monthName = "Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(
        " "
    )[m];
    return `${monthName} ${d}, ${y}`;
}

// Base class representing a general span of time
export class TimeSpan {
    constructor(startDate, endDate) {
        this.startDate = new Date(startDate);
        this.endDate = new Date(endDate);
    }

    getDurationInDays() {
        const millisecondsPerDay = 1000 * 60 * 60 * 24;
        return Math.round((this.endDate - this.startDate) / millisecondsPerDay);
    }

    getStartTimeAbbreviation() {
        return getTimeAbbreviation(this.startDate);
    }

    getEndTimeAbbreviation() {
        return getTimeAbbreviation(this.endDate);
    }

    toString() {
        return `From ${this.startDate.toDateString()} to ${this.endDate.toDateString()}`;
    }
}

export class Education extends TimeSpan {
    constructor(startDate, endDate, institutionName, degree, fieldOfStudy) {
        super(startDate, endDate);
        this.institutionName = institutionName;
        this.degree = degree;
        this.fieldOfStudy = fieldOfStudy;
    }

    toString() {
        return `${this.degree} in ${this.fieldOfStudy} at ${
            this.institutionName
        } (${super.toString()})`;
    }
}

class Job extends TimeSpan {
    constructor(
        startDate,
        endDate,
        companyName,
        positionTitle,
        responsibilities
    ) {
        super(startDate, endDate);
        this.companyName = companyName;
        this.positionTitle = positionTitle;
        this.responsibilities = responsibilities;
    }

    toString() {
        return `${this.positionTitle} at ${this.companyName}: ${
            this.responsibilities
        } (${super.toString()})`;
    }
}

export class Project extends TimeSpan {
    constructor(
        startDate,
        endDate,
        displayName,
        projectName,
        description,
        tags,
        imgPath = "default",
        backgroundPath = "default",
        markdown = ""
    ) {
        super(startDate, endDate);
        this.displayName = displayName;
        this.projectName = projectName;
        this.description = description;
        this.tags = tags;

        this.imgPath = `${imgPath}`;
        if (imgPath == "default")
            this.imgPath = `projects/${projectName}/tile.gif`;
        else if (imgPath == "card")
            this.imgPath = `projects/${projectName}/card.png`;

        this.backgroundPath = backgroundPath;
        if (backgroundPath == "default")
            this.backgroundPath = `projects/${projectName}/background.png`;

        this.markdown = markdown;
        if (markdown == "default")
            this.markdown = `data/${projectName}Blog.jsx`;
    }

    toString() {
        return `${this.projectName}: ${this.description} (${super.toString()})`;
    }
}

// // Example usage
// const projectTime = new ProjectTimeSpan('2023-01-01', '2023-06-01', 'Website Redesign', 'Revamped the company website for better UX');
// console.log(projectTime.toString());
// console.log(`Duration: ${projectTime.getDurationInDays()} days`);
//
// const educationTime = new EducationTimeSpan('2019-09-01', '2023-05-15', 'State University', 'Bachelor of Science', 'Computer Science');
// console.log(educationTime.toString());
// console.log(`Duration: ${educationTime.getDurationInDays()} days`);
