﻿# CartFusion
**CartFusion Project: E2E and Unit Testing with Cypress and Vitest**

The **CartFusion** project is a web application featuring an online shopping cart functionality for an e-commerce website. As part of this project, a testing framework was developed that integrates two powerful testing frameworks: **Cypress** for End-to-End (E2E) testing and **Vitest** for Unit testing. 

### **Cypress: E2E Testing for Cart Functionality**

Cypress is used for testing all critical aspects of the shopping cart in real-world conditions. This includes verifying user interactions with the cart, such as:
1. **Adding items to the cart** — tests ensure that products are correctly added to the cart when users click the "Add to Cart" buttons.
2. **Removing items from the cart** — ensures that items can be removed and the cart is updated accordingly.
3. **Clearing the cart** — verifies that when the cart is cleared, it becomes empty, and the total price is reset to zero.

Cypress tests simulate real user behavior by interacting with the page, such as clicking buttons and verifying DOM elements. This ensures that the shopping cart functionality works as expected in a real-world scenario.

For each test, an **HTML report** is generated, which can be viewed after running the tests. These reports contain detailed information about each test step, including whether the test passed or failed.

### **Vitest: Unit Testing for Application Logic**

Vitest is used for unit testing, which allows testing the application's internal logic at the function and component level. Unit tests are written to validate:
1. **Retrieving data from localStorage** — ensures that cart data is correctly saved to and retrieved from the browser’s localStorage.
2. **Error handling with invalid data** — verifies that the application correctly handles corrupted or invalid data in localStorage (such as invalid JSON).
3. **Cart logic and updates** — tests ensure that the cart's state updates correctly, and the user interface is properly updated in response to changes.

Like with Cypress, **HTML reports** are generated for Vitest tests. These reports allow developers to easily track test outcomes and quickly address any issues identified during testing.

### **Integration of Both Frameworks**

Combining Cypress and Vitest in one project provides comprehensive test coverage, addressing both the client-side functionality and the internal logic of the application. This integration ensures that every aspect of the shopping cart, from the user interface to the business logic, is thoroughly tested.

- **Cypress** provides all the necessary tools for testing user interactions, ensuring that all cart features work properly from the user's perspective.
- **Vitest** focuses on testing the internal logic, ensuring that the code behind the cart operates correctly.

### **Testing Results and Reporting**

After running the tests, whether they are E2E tests using Cypress or unit tests with Vitest, HTML reports are generated. These reports provide detailed insights into the success or failure of each test, helping developers:
- Quickly identify issues when a test fails.
- Analyze the reasons behind any failures and work on resolving them.
- Ensure transparency in the testing process, making it easier for the team to monitor progress.

Using these reports enables the development team to work efficiently on improving the quality of the application and ensure that the shopping cart works as expected at every level.

### **Conclusion**

The **CartFusion** project utilizes two powerful testing frameworks, **Cypress** and **Vitest**, working together to ensure the quality and stability of the shopping cart functionality. Cypress is responsible for end-to-end testing of the user experience, while Vitest focuses on testing the internal logic of the application. This approach provides comprehensive coverage, ensuring a reliable and stable shopping cart, both from a user interaction perspective and in terms of business logic. With the integration of HTML test reports, the development team can efficiently monitor the quality and make improvements, ensuring that the cart delivers a seamless experience for users.
