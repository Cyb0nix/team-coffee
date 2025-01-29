import {test} from "@playwright/test";
import {ResetDatabasePage} from "./pages/reset-database-page";
import {AddEmployeePage} from "./pages/add-employee-page";
import {EmployeesPage} from "./pages/employees-page";

test.beforeEach(async ({ page }) => {
    const resetDatabasePage = new ResetDatabasePage(page);
    await resetDatabasePage.goto()
    await resetDatabasePage.resetDatabase()
});

test('add employee', async ({page}) => {
    const addEmployeePage = new AddEmployeePage(page);
    const employeePage = new EmployeesPage(page);
    await addEmployeePage.goto();
    await addEmployeePage.createEmployee('John Doe', 'john.doe@test.com', '10 rue Le Rouge','Bat B','Paris', '75009', '2002-06-01', 'CEO')
    await employeePage.goto();
    await employeePage.assertEmployee('John Doe', 'john.doe@test.com','non')
});
