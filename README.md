# 📊 Syncfusion React Spreadsheet Demo

A comprehensive demonstration application showcasing the powerful features of Syncfusion's React Spreadsheet component.

## 🎯 Features Demonstrated

This demo application showcases the following spreadsheet capabilities:

### 📋 Overview Tab
- **Multi-sheet workbook** with Employee Payroll, Sales Data, and Budget Tracker
- **Data binding** from JSON objects
- **Pre-populated data** with real-world examples
- **Custom sheet styling** with headers and colors

### 🔢 Formulas Tab
- **Built-in formulas**: SUM, AVERAGE, MAX, MIN, COUNT
- **Logical functions**: IF statements
- **Text functions**: CONCATENATE
- **Math functions**: ROUND
- **Date functions**: TODAY
- **Real-time calculation** results

### 🎨 Formatting Tab
- **Text formatting**: Bold, Italic, Underline
- **Text colors** and background colors
- **Number formatting**: Currency, Percentage, Decimals
- **Date formatting**
- **Text alignment**: Left, Center, Right
- **Cell styling** demonstrations

### ⚡ Advanced Features Tab
- **Hyperlinks** to external websites
- **Data validation** with dropdown lists
- **Conditional formatting** with color rules
- **Text wrapping** in cells
- **Sorting** by column
- **Filtering** data
- **Find & Replace** functionality
- **Undo/Redo** operations

## 🚀 Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Navigate to the project directory:
```bash
cd react-demo-jspreadsheet
```

2. Install dependencies:
```bash
npm install
```

3. **Important**: Get a Syncfusion license key
   - Visit [Syncfusion's website](https://www.syncfusion.com/sales/products)
   - Sign up for a free trial or purchase a license
   - Copy your license key
   - Open `src/App.tsx` and uncomment the license registration line:
   ```typescript
   registerLicense('YOUR_LICENSE_KEY_HERE');
   ```

### Running the Application

Start the development server:
```bash
npm run dev
```

The application will open at `http://localhost:3000`

### Building for Production

```bash
npm run build
```

## 📚 Key Features Implemented

✅ **Data Sources**: JSON data binding  
✅ **Formulas**: 100+ built-in functions  
✅ **Cell Formatting**: Fonts, colors, borders  
✅ **Number Formatting**: Currency, percentage, custom formats  
✅ **Multiple Sheets**: Workbook with multiple worksheets  
✅ **Editing**: Cell editing with validation  
✅ **Selection**: Single and range selection  
✅ **Clipboard**: Cut, copy, paste operations  
✅ **Sorting**: Sort by column  
✅ **Filtering**: Filter data by criteria  
✅ **Find & Replace**: Search across sheets  
✅ **Hyperlinks**: Web and cell references  
✅ **Data Validation**: Dropdown lists, rules  
✅ **Conditional Formatting**: Color-based rules  
✅ **Merge Cells**: Combine cells  
✅ **Freeze Panes**: Lock rows/columns  
✅ **Undo/Redo**: Action history  

## 🎓 Learning Resources

- [Syncfusion Spreadsheet Documentation](https://help.syncfusion.com/document-processing/excel/spreadsheet/react/overview)
- [API Reference](https://ej2.syncfusion.com/react/documentation/spreadsheet/api-spreadsheet/)
- [Live Examples](https://ej2.syncfusion.com/react/demos/#/material/spreadsheet/default)

## 📦 Technologies Used

- **React** 18.2+
- **TypeScript** 5.2+
- **Vite** 5.0+ (Build tool)
- **Syncfusion EJ2 React Spreadsheet** 27.2+

## 💡 Usage Tips

1. **Navigation**: Use tabs at the top to switch between different demos
2. **Editing**: Double-click any cell to edit its content
3. **Formulas**: Start with `=` to enter a formula
4. **Context Menu**: Right-click on cells for more options
5. **Keyboard Shortcuts**:
   - `Ctrl+C`: Copy
   - `Ctrl+V`: Paste
   - `Ctrl+Z`: Undo
   - `Ctrl+Y`: Redo
   - `Ctrl+F`: Find & Replace
   - `Delete`: Clear cell content

## 🎨 Customization

The demo uses Syncfusion's Material theme. You can customize by:
- Changing theme in `src/App.css` (available: Material, Bootstrap, Fabric, etc.)
- Modifying colors in the CSS variables
- Adding your own data sources
- Creating custom formulas

## 📝 License Note

⚠️ **Important**: This demo requires a valid Syncfusion license for production use. 

- **Free Trial**: Available for 30 days
- **Community License**: Free for companies with < $1M revenue
- **Commercial License**: Required for larger organizations

Visit [Syncfusion Licensing](https://www.syncfusion.com/sales/products) for more information.

## 🤝 Contributing

Feel free to extend this demo with additional features:
- Charts and graphs
- Image insertion
- Conditional formatting rules
- Custom functions
- Import/Export Excel files
- Print functionality

## 📞 Support

For issues with Syncfusion components:
- [Syncfusion Support](https://www.syncfusion.com/support)
- [Community Forums](https://www.syncfusion.com/forums)

---

**Built with ❤️ using Syncfusion React Spreadsheet**
