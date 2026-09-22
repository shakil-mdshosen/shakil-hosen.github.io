# Mess Search Page

A webapp for searching and viewing mess records from a Google Sheet.

## Features

- **Bengali Interface**: User-friendly interface in Bengali language
- **Dropdown Search**: Select name from dropdown to search records
- **Real-time Data**: Fetches data from Google Sheets
- **Sample Data**: Includes sample data for demonstration when Google Sheet is not published
- **Responsive Design**: Works on desktop and mobile devices
- **Clean Table Display**: Shows data in organized table format

## Table Columns

The table displays the following information:

| Column | Bengali Name | Google Sheet Column |
|--------|--------------|-------------------|
| Name | নাম | Column A |
| Total Deposit | মোট জমা | Column H |
| Total Meals | মোট মিল | Column M |
| Total Expense | মোট খরচ | Column O |
| Remaining | বাকী | Column P |

## How to Use

1. Visit the page at `/mess/` 
2. Select a name from the dropdown
3. Click the search button (খুঁজুন)
4. View the results in the table

## Setting Up Google Sheet

To connect your own Google Sheet:

1. **Publish the Google Sheet to the web:**
   - Open your Google Sheet
   - Go to **File** > **Share** > **Publish to web**
   - In the dialog, select **Entire Document** (or specific sheet if needed)
   - Choose **Web page** format (NOT CSV - the page will convert it)
   - Click **Publish**
   - Confirm by clicking **OK**
   - Copy the published URL (it will look like: `https://docs.google.com/spreadsheets/d/e/2PACX-.../pubhtml`)

2. **Update the Sheet ID:**
   - From the published URL, extract the Sheet ID (the long string after `/d/e/` and before `/pubhtml`)
   - Example: From `https://docs.google.com/spreadsheets/d/e/2PACX-1vQzFaoeHgpSK3XO1W97Iy5sQTjSUSgNxCYNVCrpdyW7_IwguzUXTU9FGhCQXwz0-w/pubhtml`
   - The Sheet ID is: `2PACX-1vQzFaoeHgpSK3XO1W97Iy5sQTjSUSgNxCYNVCrpdyW7_IwguzUXTU9FGhCQXwz0-w`
   - Update the `SHEET_ID` constant in the JavaScript code (line 617 in index.html)

3. **Sheet Structure:**
   - The page expects data in a sheet named "Main"
   - Required columns:
     - Column A: Name (নাম)
     - Column H: Total Deposit (মোট জমা)
     - Column M: Total Meals (মোট মিল)
     - Column O: Total Expense (মোট খরচ)
     - Column P: Remaining (বাকী)

## Technical Details

### Data Fetching

The page uses Google Sheets CSV export to fetch data:
```
https://docs.google.com/spreadsheets/d/e/SHEET_ID/pub?gid=0&single=true&output=csv
```

Where:
- `SHEET_ID` is the published sheet ID (starts with "2PACX-" for published sheets)
- `gid=0` refers to the first sheet/tab (0-indexed, so 0 = first sheet, 1 = second sheet, etc.)
- `single=true` ensures we get a single sheet
- `output=csv` requests CSV format

### Fallback Mechanism

If the Google Sheet is not published or cannot be accessed:
- The page automatically uses sample data
- A warning message is displayed
- Users can still test the functionality

### Filter Logic

The search functionality filters data similar to Google Sheets FILTER function:
```
=IFERROR(FILTER({Main!A2:A, Main!H2:H, Main!M2:M, Main!O2:O, Main!P2:P}, Main!A2:A = H1), "No record found")
```

## Browser Support

- Modern browsers (Chrome, Firefox, Safari, Edge)
- Mobile browsers (iOS Safari, Chrome Mobile)
- Requires JavaScript enabled

## Privacy & Security

- All data fetching happens client-side
- No data is stored on any server
- Data is fetched directly from Google Sheets
- No cookies or tracking

## Troubleshooting

### "Failed to fetch" Error

If you see a "Failed to fetch" error:
1. Ensure the Google Sheet is published to the web
2. Check that the sheet ID is correct
3. Verify the sheet has a tab named "Main"
4. Check browser console for detailed errors

### No Names in Dropdown

If the dropdown is empty:
1. Check that Column A has names
2. Verify the sheet is published
3. Check browser console for errors

### Wrong Data Displayed

If incorrect data is shown:
1. Verify column positions (A, H, M, O, P)
2. Check that data starts from row 2 (row 1 is headers)
3. Ensure there are no merged cells in the data range

## License

Part of the shakil.engineer website. © 2026 Shakil Hosen
