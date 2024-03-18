# Issue Tracker Project

This project is an Issue Tracker that allows users to manage and track various issues related to different projects.

## Folder Structure

- **assets**: Contains JavaScript files for filtering and searching issues.
  - `filterIssues.js`: Handles filtering of issues.
  - `searchIssues.js`: Handles searching for specific issues.
    
- **config**: Contains configuration files.
  - `mongoose.js`: Configuration file for MongoDB connection using Mongoose.
    
- **controllers**: Contains controller logic for handling routes.
  - `home_controller.js`: Controller for home-related routes.
  - `project_controller.js`: Controller for project-related routes.
    
- **models**: Contains Mongoose models for MongoDB.
  - `issue.js`: Model for the Issue object.
  - `project.js`: Model for the Project object.
    
- **routes**: Contains route handlers.
  - `index.js`: Main routing file.
  - `project.js`: Routing for project-related routes.
    
- **views**: Contains EJS templates for rendering views.
  - **partials**: Contains partial templates used in other views.
    - `_footer.ejs`: Footer partial.
    - `_header.ejs`: Header partial.
    - `_issue_form.ejs`: Form for creating or editing an issue.
    - `_issues.ejs`: Partial for displaying a list of issues.
  - `home.ejs`: Home page view.
  - `layout.ejs`: Main layout template.
  - `project_page.ejs`: Project page view.
    

## Other Files

- `.gitignore`: Specifies intentionally untracked files to ignore.
- `index.js`: Main entry point for the application.
- `package-lock.json`: Automatically generated for any operations where npm modifies either the node_modules tree or package.json.
- `package.json`: Contains metadata about the project and manages project dependencies.
  

## Getting Started

1. Clone the repository.
2. Install dependencies using `npm install`.
3. Set up a MongoDB database and update the `mongoose.js` configuration file with your database URI.
4. Run the application using `npm start`.
   

## Technologies Used

- Node.js
- Express.js
- MongoDB with Mongoose
- EJS (Embedded JavaScript) for templating

## Author

Ramavtar Nagar
