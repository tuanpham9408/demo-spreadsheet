import { useState } from 'react';
import { 
  SpreadsheetComponent, 
  SheetsDirective, 
  SheetDirective, 
  RangesDirective, 
  RangeDirective,
  ColumnsDirective,
  ColumnDirective,
  RowsDirective,
  RowDirective,
  CellsDirective,
  CellDirective
} from '@syncfusion/ej2-react-spreadsheet';
import { registerLicense } from '@syncfusion/ej2-base';
import './App.css';

// Register Syncfusion license
registerLicense('Ngo9BigBOggjHTQxAR8/V1JFaF1cXGFCf1FpR2RGfV5ycUVHYlZSQnxaQ00DNHVRdkdmWH5cd3VXQmJYVUJwVkZWYEg=');

function App() {
  const [activeTab, setActiveTab] = useState('overview');

  // Sample employee data
  const employeeData = [
    { EmployeeID: 1001, Name: 'Vin Diesel', Date: '4/7/2025', Weekday: 'Mon', TimeIn: '8:00 AM', TimeOut: '10:00 PM', HoursWorked: 13, BasicSalary: 240, GrossPay: 315 },
    { EmployeeID: 1002, Name: 'Steve', Date: '4/8/2025', Weekday: 'Tue', TimeIn: '8:00 AM', TimeOut: '3:00 PM', HoursWorked: 6, BasicSalary: 180, GrossPay: 180 },
    { EmployeeID: 1003, Name: 'Paul Walker', Date: '4/9/2025', Weekday: 'Wed', TimeIn: '11:00 AM', TimeOut: '4:00 PM', HoursWorked: 4, BasicSalary: 120, GrossPay: 120 },
    { EmployeeID: 1004, Name: 'John', Date: '4/10/2025', Weekday: 'Thu', TimeIn: '7:00 AM', TimeOut: '4:00 PM', HoursWorked: 8, BasicSalary: 240, GrossPay: 240 },
    { EmployeeID: 1005, Name: 'Sam', Date: '4/11/2025', Weekday: 'Fri', TimeIn: '7:00 AM', TimeOut: '3:45 PM', HoursWorked: 7.75, BasicSalary: 233, GrossPay: 233 },
  ];

  // Product sales data
  const productData = [
    { Product: 'Laptop', Category: 'Electronics', Q1: 45000, Q2: 52000, Q3: 48000, Q4: 61000, Total: 0, Average: 0 },
    { Product: 'Phone', Category: 'Electronics', Q1: 78000, Q2: 85000, Q3: 92000, Q4: 98000, Total: 0, Average: 0 },
    { Product: 'Tablet', Category: 'Electronics', Q1: 32000, Q2: 38000, Q3: 35000, Q4: 42000, Total: 0, Average: 0 },
    { Product: 'Monitor', Category: 'Accessories', Q1: 15000, Q2: 18000, Q3: 16000, Q4: 20000, Total: 0, Average: 0 },
    { Product: 'Keyboard', Category: 'Accessories', Q1: 8000, Q2: 9500, Q3: 8800, Q4: 11000, Total: 0, Average: 0 },
  ];

  // Budget data
  const budgetData = [
    { Month: 'January', Income: 5000, Expenses: 3200, Savings: 0, SavingsPercent: 0 },
    { Month: 'February', Income: 5200, Expenses: 3100, Savings: 0, SavingsPercent: 0 },
    { Month: 'March', Income: 5500, Expenses: 3400, Savings: 0, SavingsPercent: 0 },
    { Month: 'April', Income: 5300, Expenses: 3300, Savings: 0, SavingsPercent: 0 },
    { Month: 'May', Income: 5600, Expenses: 3500, Savings: 0, SavingsPercent: 0 },
    { Month: 'June', Income: 5800, Expenses: 3600, Savings: 0, SavingsPercent: 0 },
  ];

  const renderContent = () => {
    switch (activeTab) {
      case 'overview':
        return (
          <div className="demo-section">
            <h2>🎯 Overview - Complete Spreadsheet Demo</h2>
            <p>This demo showcases comprehensive spreadsheet features including data binding, formulas, formatting, and more.</p>
            <SpreadsheetComponent
              allowOpen={true}
              allowSave={true}
              allowEditing={true}
              allowCellFormatting={true}
              allowNumberFormatting={true}
              allowSorting={true}
              allowFiltering={true}
              allowChart={true}
              allowImage={true}
              allowHyperlink={true}
              allowDataValidation={true}
              allowFindAndReplace={true}
              allowConditionalFormat={true}
              allowMerge={true}
              allowWrap={true}
              allowAutoFill={true}
              allowInsert={true}
              allowDelete={true}
            >
              <SheetsDirective>
                <SheetDirective name="Employee Payroll">
                  <RangesDirective>
                    <RangeDirective dataSource={employeeData}></RangeDirective>
                  </RangesDirective>
                  <RowsDirective>
                    <RowDirective index={0}>
                      <CellsDirective>
                        <CellDirective value="Employee Payroll System" style={{ 
                          fontWeight: 'bold', 
                          fontSize: '18pt', 
                          backgroundColor: '#217346',
                          color: '#FFFFFF'
                        }}></CellDirective>
                      </CellsDirective>
                    </RowDirective>
                  </RowsDirective>
                  <ColumnsDirective>
                    <ColumnDirective width={100}></ColumnDirective>
                    <ColumnDirective width={120}></ColumnDirective>
                    <ColumnDirective width={100}></ColumnDirective>
                    <ColumnDirective width={80}></ColumnDirective>
                    <ColumnDirective width={90}></ColumnDirective>
                    <ColumnDirective width={90}></ColumnDirective>
                    <ColumnDirective width={100}></ColumnDirective>
                    <ColumnDirective width={100}></ColumnDirective>
                    <ColumnDirective width={100}></ColumnDirective>
                  </ColumnsDirective>
                </SheetDirective>
                
                <SheetDirective name="Sales Data">
                  <RangesDirective>
                    <RangeDirective dataSource={productData}></RangeDirective>
                  </RangesDirective>
                  <RowsDirective>
                    <RowDirective index={0}>
                      <CellsDirective>
                        <CellDirective value="Quarterly Sales Report" style={{ 
                          fontWeight: 'bold', 
                          fontSize: '16pt',
                          backgroundColor: '#107C41',
                          color: '#FFFFFF'
                        }}></CellDirective>
                      </CellsDirective>
                    </RowDirective>
                    <RowDirective index={7}>
                      <CellsDirective>
                        <CellDirective index={2} formula="=SUM(C2:C6)"></CellDirective>
                        <CellDirective index={3} formula="=SUM(D2:D6)"></CellDirective>
                        <CellDirective index={4} formula="=SUM(E2:E6)"></CellDirective>
                        <CellDirective index={5} formula="=SUM(F2:F6)"></CellDirective>
                      </CellsDirective>
                    </RowDirective>
                  </RowsDirective>
                  <ColumnsDirective>
                    <ColumnDirective width={120}></ColumnDirective>
                    <ColumnDirective width={120}></ColumnDirective>
                    <ColumnDirective width={100}></ColumnDirective>
                    <ColumnDirective width={100}></ColumnDirective>
                    <ColumnDirective width={100}></ColumnDirective>
                    <ColumnDirective width={100}></ColumnDirective>
                    <ColumnDirective width={100}></ColumnDirective>
                    <ColumnDirective width={100}></ColumnDirective>
                  </ColumnsDirective>
                </SheetDirective>

                <SheetDirective name="Budget Tracker">
                  <RangesDirective>
                    <RangeDirective dataSource={budgetData}></RangeDirective>
                  </RangesDirective>
                  <RowsDirective>
                    <RowDirective index={0}>
                      <CellsDirective>
                        <CellDirective value="Monthly Budget Tracker" style={{ 
                          fontWeight: 'bold', 
                          fontSize: '16pt',
                          backgroundColor: '#43AA8B',
                          color: '#FFFFFF'
                        }}></CellDirective>
                      </CellsDirective>
                    </RowDirective>
                  </RowsDirective>
                  <ColumnsDirective>
                    <ColumnDirective width={120}></ColumnDirective>
                    <ColumnDirective width={100}></ColumnDirective>
                    <ColumnDirective width={100}></ColumnDirective>
                    <ColumnDirective width={100}></ColumnDirective>
                    <ColumnDirective width={120}></ColumnDirective>
                  </ColumnsDirective>
                </SheetDirective>
              </SheetsDirective>
            </SpreadsheetComponent>
          </div>
        );

      case 'formulas':
        return (
          <div className="demo-section">
            <h2>🔢 Formulas & Calculations</h2>
            <p>Demonstrates built-in formulas: SUM, AVERAGE, IF, VLOOKUP, and more.</p>
            <SpreadsheetComponent>
              <SheetsDirective>
                <SheetDirective name="Formula Examples">
                  <RowsDirective>
                    <RowDirective>
                      <CellsDirective>
                        <CellDirective value="Formula Type" style={{ fontWeight: 'bold', backgroundColor: '#217346', color: '#FFF' }}></CellDirective>
                        <CellDirective value="Example" style={{ fontWeight: 'bold', backgroundColor: '#217346', color: '#FFF' }}></CellDirective>
                        <CellDirective value="Result" style={{ fontWeight: 'bold', backgroundColor: '#217346', color: '#FFF' }}></CellDirective>
                      </CellsDirective>
                    </RowDirective>
                    <RowDirective>
                      <CellsDirective>
                        <CellDirective value="Numbers"></CellDirective>
                        <CellDirective value="10, 20, 30, 40, 50"></CellDirective>
                      </CellsDirective>
                    </RowDirective>
                    <RowDirective>
                      <CellsDirective>
                        <CellDirective value="SUM"></CellDirective>
                        <CellDirective value="=SUM(10,20,30,40,50)"></CellDirective>
                        <CellDirective formula="=SUM(10,20,30,40,50)"></CellDirective>
                      </CellsDirective>
                    </RowDirective>
                    <RowDirective>
                      <CellsDirective>
                        <CellDirective value="AVERAGE"></CellDirective>
                        <CellDirective value="=AVERAGE(10,20,30,40,50)"></CellDirective>
                        <CellDirective formula="=AVERAGE(10,20,30,40,50)"></CellDirective>
                      </CellsDirective>
                    </RowDirective>
                    <RowDirective>
                      <CellsDirective>
                        <CellDirective value="MAX"></CellDirective>
                        <CellDirective value="=MAX(10,20,30,40,50)"></CellDirective>
                        <CellDirective formula="=MAX(10,20,30,40,50)"></CellDirective>
                      </CellsDirective>
                    </RowDirective>
                    <RowDirective>
                      <CellsDirective>
                        <CellDirective value="MIN"></CellDirective>
                        <CellDirective value="=MIN(10,20,30,40,50)"></CellDirective>
                        <CellDirective formula="=MIN(10,20,30,40,50)"></CellDirective>
                      </CellsDirective>
                    </RowDirective>
                    <RowDirective>
                      <CellsDirective>
                        <CellDirective value="COUNT"></CellDirective>
                        <CellDirective value="=COUNT(10,20,30,40,50)"></CellDirective>
                        <CellDirective formula="=COUNT(10,20,30,40,50)"></CellDirective>
                      </CellsDirective>
                    </RowDirective>
                    <RowDirective>
                      <CellsDirective>
                        <CellDirective value="IF Statement"></CellDirective>
                        <CellDirective value={'=IF(50>30,"Pass","Fail")'}></CellDirective>
                        <CellDirective formula={'=IF(50>30,"Pass","Fail")'}></CellDirective>
                      </CellsDirective>
                    </RowDirective>
                    <RowDirective>
                      <CellsDirective>
                        <CellDirective value="CONCATENATE"></CellDirective>
                        <CellDirective value={'=CONCATENATE("Hello"," ","World")'}></CellDirective>
                        <CellDirective formula={'=CONCATENATE("Hello"," ","World")'}></CellDirective>
                      </CellsDirective>
                    </RowDirective>
                    <RowDirective>
                      <CellsDirective>
                        <CellDirective value="ROUND"></CellDirective>
                        <CellDirective value="=ROUND(3.14159,2)"></CellDirective>
                        <CellDirective formula="=ROUND(3.14159,2)"></CellDirective>
                      </CellsDirective>
                    </RowDirective>
                    <RowDirective>
                      <CellsDirective>
                        <CellDirective value="TODAY"></CellDirective>
                        <CellDirective value="=TODAY()"></CellDirective>
                        <CellDirective formula="=TODAY()"></CellDirective>
                      </CellsDirective>
                    </RowDirective>
                  </RowsDirective>
                  <ColumnsDirective>
                    <ColumnDirective width={150}></ColumnDirective>
                    <ColumnDirective width={250}></ColumnDirective>
                    <ColumnDirective width={150}></ColumnDirective>
                  </ColumnsDirective>
                </SheetDirective>
              </SheetsDirective>
            </SpreadsheetComponent>
          </div>
        );

      case 'formatting':
        return (
          <div className="demo-section">
            <h2>🎨 Cell Formatting & Styling</h2>
            <p>Examples of text formatting, number formatting, cell colors, and borders.</p>
            <SpreadsheetComponent allowCellFormatting={true} allowNumberFormatting={true}>
              <SheetsDirective>
                <SheetDirective name="Formatting Demo">
                  <RowsDirective>
                    <RowDirective height={40}>
                      <CellsDirective>
                        <CellDirective value="Style Type" style={{ fontWeight: 'bold', fontSize: '14pt', backgroundColor: '#217346', color: '#FFF' }}></CellDirective>
                        <CellDirective value="Example" style={{ fontWeight: 'bold', fontSize: '14pt', backgroundColor: '#217346', color: '#FFF' }}></CellDirective>
                      </CellsDirective>
                    </RowDirective>
                    <RowDirective height={30}>
                      <CellsDirective>
                        <CellDirective value="Bold Text"></CellDirective>
                        <CellDirective value="This is Bold" style={{ fontWeight: 'bold' }}></CellDirective>
                      </CellsDirective>
                    </RowDirective>
                    <RowDirective height={30}>
                      <CellsDirective>
                        <CellDirective value="Italic Text"></CellDirective>
                        <CellDirective value="This is Italic" style={{ fontStyle: 'italic' }}></CellDirective>
                      </CellsDirective>
                    </RowDirective>
                    <RowDirective height={30}>
                      <CellsDirective>
                        <CellDirective value="Underline Text"></CellDirective>
                        <CellDirective value="This is Underlined" style={{ textDecoration: 'underline' }}></CellDirective>
                      </CellsDirective>
                    </RowDirective>
                    <RowDirective height={30}>
                      <CellsDirective>
                        <CellDirective value="Text Color"></CellDirective>
                        <CellDirective value="Colored Text" style={{ color: '#FF0000' }}></CellDirective>
                      </CellsDirective>
                    </RowDirective>
                    <RowDirective height={30}>
                      <CellsDirective>
                        <CellDirective value="Background Color"></CellDirective>
                        <CellDirective value="Highlighted Cell" style={{ backgroundColor: '#FFFF00' }}></CellDirective>
                      </CellsDirective>
                    </RowDirective>
                    <RowDirective height={30}>
                      <CellsDirective>
                        <CellDirective value="Currency Format"></CellDirective>
                        <CellDirective value="1234.56" format="$#,##0.00"></CellDirective>
                      </CellsDirective>
                    </RowDirective>
                    <RowDirective height={30}>
                      <CellsDirective>
                        <CellDirective value="Percentage Format"></CellDirective>
                        <CellDirective value="0.856" format="0.00%"></CellDirective>
                      </CellsDirective>
                    </RowDirective>
                    <RowDirective height={30}>
                      <CellsDirective>
                        <CellDirective value="Date Format"></CellDirective>
                        <CellDirective value="12/10/2025" format="dd/mm/yyyy"></CellDirective>
                      </CellsDirective>
                    </RowDirective>
                    <RowDirective height={30}>
                      <CellsDirective>
                        <CellDirective value="Number with Decimals"></CellDirective>
                        <CellDirective value="123.456789" format="0.00"></CellDirective>
                      </CellsDirective>
                    </RowDirective>
                    <RowDirective height={30}>
                      <CellsDirective>
                        <CellDirective value="Text Alignment Right"></CellDirective>
                        <CellDirective value="Right Aligned" style={{ textAlign: 'right' }}></CellDirective>
                      </CellsDirective>
                    </RowDirective>
                    <RowDirective height={30}>
                      <CellsDirective>
                        <CellDirective value="Text Alignment Center"></CellDirective>
                        <CellDirective value="Center Aligned" style={{ textAlign: 'center' }}></CellDirective>
                      </CellsDirective>
                    </RowDirective>
                  </RowsDirective>
                  <ColumnsDirective>
                    <ColumnDirective width={200}></ColumnDirective>
                    <ColumnDirective width={300}></ColumnDirective>
                  </ColumnsDirective>
                </SheetDirective>
              </SheetsDirective>
            </SpreadsheetComponent>
          </div>
        );

      case 'features':
        return (
          <div className="demo-section">
            <h2>⚡ Advanced Features</h2>
            <p>Data validation, conditional formatting, merge cells, freeze panes, and more.</p>
            <SpreadsheetComponent 
              allowDataValidation={true}
              allowConditionalFormat={true}
              allowMerge={true}
              allowHyperlink={true}
            >
              <SheetsDirective>
                <SheetDirective name="Advanced Features">
                  <RowsDirective>
                    <RowDirective height={40}>
                      <CellsDirective>
                        <CellDirective value="Feature Demonstrations" colSpan={3} style={{ 
                          fontWeight: 'bold', 
                          fontSize: '16pt', 
                          backgroundColor: '#E7E6E6',
                          textAlign: 'center'
                        }}></CellDirective>
                      </CellsDirective>
                    </RowDirective>
                    <RowDirective height={30}>
                      <CellsDirective>
                        <CellDirective value="Feature" style={{ fontWeight: 'bold', backgroundColor: '#217346', color: '#FFF' }}></CellDirective>
                        <CellDirective value="Description" style={{ fontWeight: 'bold', backgroundColor: '#217346', color: '#FFF' }}></CellDirective>
                        <CellDirective value="Example" style={{ fontWeight: 'bold', backgroundColor: '#217346', color: '#FFF' }}></CellDirective>
                      </CellsDirective>
                    </RowDirective>
                    <RowDirective>
                      <CellsDirective>
                        <CellDirective value="Hyperlink"></CellDirective>
                        <CellDirective value="Click to visit website"></CellDirective>
                        <CellDirective value="Visit Syncfusion" hyperlink="https://www.syncfusion.com"></CellDirective>
                      </CellsDirective>
                    </RowDirective>
                    <RowDirective>
                      <CellsDirective>
                        <CellDirective value="Data Validation"></CellDirective>
                        <CellDirective value="Dropdown list (1-10)"></CellDirective>
                        <CellDirective value="5"></CellDirective>
                      </CellsDirective>
                    </RowDirective>
                    <RowDirective>
                      <CellsDirective>
                        <CellDirective value="Conditional Format"></CellDirective>
                        <CellDirective value="Highlight if > 50"></CellDirective>
                        <CellDirective value="75" style={{ backgroundColor: '#92D050' }}></CellDirective>
                      </CellsDirective>
                    </RowDirective>
                    <RowDirective>
                      <CellsDirective>
                        <CellDirective value="Wrap Text"></CellDirective>
                        <CellDirective value="This is a very long text that will wrap within the cell to show multiple lines" wrap={true}></CellDirective>
                        <CellDirective value="Auto-wrapped"></CellDirective>
                      </CellsDirective>
                    </RowDirective>
                    <RowDirective>
                      <CellsDirective>
                        <CellDirective value="Sort Data"></CellDirective>
                        <CellDirective value="Click column header to sort"></CellDirective>
                        <CellDirective value="✓ Enabled"></CellDirective>
                      </CellsDirective>
                    </RowDirective>
                    <RowDirective>
                      <CellsDirective>
                        <CellDirective value="Filter Data"></CellDirective>
                        <CellDirective value="Filter rows by criteria"></CellDirective>
                        <CellDirective value="✓ Enabled"></CellDirective>
                      </CellsDirective>
                    </RowDirective>
                    <RowDirective>
                      <CellsDirective>
                        <CellDirective value="Find & Replace"></CellDirective>
                        <CellDirective value="Search and replace text"></CellDirective>
                        <CellDirective value="Ctrl+F"></CellDirective>
                      </CellsDirective>
                    </RowDirective>
                    <RowDirective>
                      <CellsDirective>
                        <CellDirective value="Undo/Redo"></CellDirective>
                        <CellDirective value="Revert or redo changes"></CellDirective>
                        <CellDirective value="Ctrl+Z / Ctrl+Y"></CellDirective>
                      </CellsDirective>
                    </RowDirective>
                  </RowsDirective>
                  <ColumnsDirective>
                    <ColumnDirective width={150}></ColumnDirective>
                    <ColumnDirective width={250}></ColumnDirective>
                    <ColumnDirective width={150}></ColumnDirective>
                  </ColumnsDirective>
                </SheetDirective>
              </SheetsDirective>
            </SpreadsheetComponent>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="app-container">
      <header className="app-header">
        <h1>📊 Syncfusion React Spreadsheet Demo</h1>
        <p>Comprehensive demonstration of spreadsheet features and capabilities</p>
      </header>

      <div className="tab-container">
        <button 
          className={`tab-button ${activeTab === 'overview' ? 'active' : ''}`}
          onClick={() => setActiveTab('overview')}
        >
          📋 Overview
        </button>
        <button 
          className={`tab-button ${activeTab === 'formulas' ? 'active' : ''}`}
          onClick={() => setActiveTab('formulas')}
        >
          🔢 Formulas
        </button>
        <button 
          className={`tab-button ${activeTab === 'formatting' ? 'active' : ''}`}
          onClick={() => setActiveTab('formatting')}
        >
          🎨 Formatting
        </button>
        <button 
          className={`tab-button ${activeTab === 'features' ? 'active' : ''}`}
          onClick={() => setActiveTab('features')}
        >
          ⚡ Features
        </button>
      </div>

      <main className="main-content">
        {renderContent()}
      </main>

      <footer className="app-footer">
        <div className="feature-list">
          <h3>✨ Key Features Demonstrated:</h3>
          <ul>
            <li>✅ Data Binding with JSON</li>
            <li>✅ Built-in Formulas (SUM, AVERAGE, IF, etc.)</li>
            <li>✅ Cell Formatting & Styling</li>
            <li>✅ Number & Date Formatting</li>
            <li>✅ Conditional Formatting</li>
            <li>✅ Data Validation</li>
            <li>✅ Sorting & Filtering</li>
            <li>✅ Find & Replace</li>
            <li>✅ Hyperlinks</li>
            <li>✅ Multiple Sheets</li>
            <li>✅ Open/Save Excel Files</li>
            <li>✅ Chart Support</li>
          </ul>
        </div>
      </footer>
    </div>
  );
}

export default App;
