# 📱 React Calculator

## Project Overview

Welcome to the **React Calculator** project! 🎉 This is a simple and fun calculator built using React and Vite. The calculator allows users to perform basic arithmetic operations such as addition, subtraction, multiplication, and division. It includes the following features:

- 📟 Numeric input display
- ➕ Concatenation of numbers when pressing multiple digits
- 🧹 Clearing the display when an operation key is pressed
- 💡 Immediate result display when an operation key is pressed again
- ✅ Display of the final result when the equals button is pressed
- 🚫 Error handling for negative results and overflow

## Functionalities

- **Addition** ➕: Adds two numbers.
- **Subtraction** ➖: Subtracts one number from another.
- **Multiplication** ✖️: Multiplies two numbers.
- **Division** ➗: Divides one number by another (with conditions for decimal results).
- **Equality** ✅: Displays the result of the current operation.
- **Decimal Point** ⚫: Allows decimal input and results.
- **Toggle Sign (+/-)** 🔄: Converts the displayed number to its negative counterpart and vice versa.
- **Keyboard Input** ⌨️: Supports entering numbers and operations via keyboard.

## Conditions

- The display can show a maximum of 9 digits. Any additional digits are ignored.
- Negative numbers are not allowed. Display shows "ERROR" for negative results.
- Numbers greater than 999999999 are not allowed. Display shows "ERROR" for overflow results.

## Deployment

The calculator is deployed on a public domain and can be accessed [here](https://calculator-testing.vercel.app/calculator). The source code is available [here](https://github.com/XavierLopez25/Calculator).

## Running Tests

Tests are configured to run with the command `npm test`. Ensure you are in the root directory of the project before running this command.

## Coverage

To check the test coverage, run the command `npm coverage`. This will show the percentage of the code covered by tests.

## 📸 Images

Include images or screenshots of the following:

### Calculator

![Calculator](https://i.postimg.cc/fTbKPWBt/Calculator.png)

### Tests Passing

![Tests Passing](https://i.postimg.cc/4yf5sXG0/tests.png)

### Coverage

![Coverage](https://i.postimg.cc/SRgGKHNx/coverage.png)

### Storybook

![Storybook](https://i.postimg.cc/BZppNPcf/Storybook.png)

## 📋 Installation and Setup

1. Clone the repository:

```bash
  git clone https://github.com/XavierLopez25/Calculator
```

2. Navigate to the project directory:

```bash
  cd calculator
```

3. Install dependencies:

```bash
  npm install
```

4. Start the development server:

```bash
  npm run dev
```

5. For storybook use:

```bash
  npm run storybook
```

🚀 Usage

- Use the on-screen buttons or your keyboard to enter numbers and operations.
- The display updates in real-time to show the current input and results.
- Use the equals button to see the final result of your calculation.
- Use the clear button to reset the display.

📄 License

- This project is licensed under the MIT License. See the LICENSE file for details.

💡 Acknowledgments

- Inspiration and reference functionality taken from CodePen.

## Happy calculating! 😊
