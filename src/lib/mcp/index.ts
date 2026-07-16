import { defineMcp } from "@lovable.dev/mcp-js";
import getAbout from "./tools/get-about";
import listSkills from "./tools/list-skills";
import listExperience from "./tools/list-experience";
import listProjects from "./tools/list-projects";
import listAwards from "./tools/list-awards";
import getContact from "./tools/get-contact";

export default defineMcp({
  name: "tran-le-portfolio-mcp",
  title: "Tran Le Portfolio",
  version: "0.1.0",
  instructions:
    "Public tools that expose Tran Le's data science portfolio: about/bio, skills, experience, projects, awards, and contact information. All data is already public on tranleportfolio.lovable.app. Use list_projects with an optional query to filter by keyword.",
  tools: [getAbout, listSkills, listExperience, listProjects, listAwards, getContact],
});