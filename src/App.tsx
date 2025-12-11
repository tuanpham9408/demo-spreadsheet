
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
import { useRef, useEffect } from 'react';
import jspreadsheet from 'jspreadsheet';
import 'jspreadsheet/dist/jspreadsheet.css';
import 'jsuites/dist/jsuites.css';
import './App.css';

// Register Syncfusion license
const syncfusionLicense = import.meta.env.VITE_SYNCFUSION_LICENSE;
if (syncfusionLicense) {
  registerLicense(syncfusionLicense);
}

// Set jspreadsheet license
const jspreadsheetLicense = import.meta.env.VITE_JSPREADSHEET_LICENSE;
if (jspreadsheetLicense) {
  jspreadsheet.setLicense(jspreadsheetLicense);
}

// Type declaration for jspreadsheet
declare module 'react' {
  interface HTMLDivElement {
    jspreadsheet?: any;
  }
}

// JSpreadsheet Component
function JSpreadsheetComponent() {
  const jssRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (jssRef.current && !(jssRef.current as any).jspreadsheet) {
      jspreadsheet(jssRef.current, {
        worksheets: [{
          data: [
            ['Product', 'Price', 'Quantity', 'Total'],
            ['Laptop', 1200, 2, '=B2*C2'],
            ['Mouse', 25, 5, '=B3*C3'],
            ['Keyboard', 80, 3, '=B4*C4'],
            ['Monitor', 300, 1, '=B5*C5'],
            ['Headphones', 150, 2, '=B6*C6'],
          ],
          minDimensions: [10, 10],
          columns: [
            { width: 150 },
            { width: 100, mask: '#,##0.00' },
            { width: 100 },
            { width: 100, mask: '#,##0.00' },
          ],
        }],
        toolbar: true,
        tabs: true,
        editable: true,
        fullscreen: false,
        tableOverflow: true,
        tableWidth: '100%',
        tableHeight: '500px',
      });
    }
  }, []);

  return <div ref={jssRef} style={{ marginTop: '20px' }} />;
}

function App() {

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

  return (
    <div className="app-container">
      <main className="main-content">
         <div className="demo-section">
            <h2>🎯 Spreadsheet Demo</h2>
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
          <div className="demo-section" style={{ marginTop: 40 }}>
            <h2>🚀 JSpreadsheet Demo</h2>
            <p>This demo showcases JSpreadsheet integration with React.</p>
            <JSpreadsheetComponent />
          </div>
      </main>
    </div>
  );
}

export default App;
