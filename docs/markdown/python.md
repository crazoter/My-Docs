---
title: Python Cheatsheet
---

Legend:
* #: Number, used for differentiating variables
* L#: List.
* D#: Dictionary. 
* itr#: Iterable.
* DF#: Dataframe
* mltIdx#: MultiIndex
* idx: Index
* int#: Integer variable


## Pure Python
* Exponentiation: val ** power
* Type conversion: *type*(val), where *type* in {int, float, str, bool}
* Iterables
  * **Loop with Index**: for idx, val in enumerate(itr)
  * **Generators (lazy loading iteration)**
    * Creation: 
      * `gen = iter(L / D / *range(i)*)`
      * `gen = (x for x in list)`
      * `gen = def fx(param): ... for x in param: yield x ...`
    * Use:    val = next(itr)
* Lists
  * **Init with List Comprehension**
    * Format: `[ (value) for (var_name) in (iterable) if (predicate) ]`
      * e.g. [L[0] for elem in list]
  * List of tuples:
    * **Convert L to L of indexed tuples:**
      * `enumerate(itr, start=int1) = [(int1,itr[0]), (int1+1,itr[0])...]`
    * Merge two lists into a list of tuples:
      * `zip(*L1*,*L2*)`
        * returns zipObject: [ (L1[0],L2[0]),  (L1[1],L2[1])... ]
        * Access zipObject contents: (*zipObj)
      * Unzip: `zip(*zipObj)`
* Dictionaries
  * **Init with Dictionary Comprehension**
    * Format: `{ (key : value) for (var_name) in (iterable) if (predicate) }`
      * e.g. {x : len(x) for x in list}
  * **Init from list of tuples**
    * `dict(zip(L1,L2))`
* Functions:
  * Default params: x=default
  * Flexible list param: `f(*args)`
    * Usage: f(v1,v2,v3...)
  * Flexible dict param: `f(**kwargs)`
    * Usage: f(k1=v1,k2=v2,k3=v3...)
  * Multiple output: 
    * def fx(): return (x, y)
    * Multiple assignment:
      * x,y = fx()
  * Global variables: `global varname`
  * Nested functions:
    * Variables & params of external f() is accessible
    * The function itself can be returned
    * Modify variables from nested f(): `nonlocal varname`
* Functional Programming
  * `map((lambda a: (transformation)), L)`
  * `filter((lambda a: (predicate)), L)`
  * `reduce((lambda a,b: ...), L) = result`
    * Import: `from functools import reduce`
  * The lambda can be replaced with a concrete function
* Lambdas
  * `(lambda (params): (body))`
  * e.g. (lambda a: a+1) ≡ def f(a): return a+1
  * No "return"
  * No multi-line
* Exception Handling
  * try: ... 
  * except: ... 
  * raise *Error*(*msg*)
    * Error = {ValueError, TypeError, YourOwnErrClass}
* I/O
  * Open file:
    * `with open('filepath') as file_var`
      * `file_var.readline()`: returns None if empty
  * Get script directory:
    * `dir_path = os.path.dirname(os.path.realpath(__file__))`
  * Get path to file relative to script directory:
    * `local_file = os.path.join(dir_path, 'path', 'to', 'local_file')`
* Datetime
  * Req: `import datetime as dt`
  * `dt.date.today()`

## Libraries / Modules
### Recordlinkage (Join datasets w/o common UID)
* `import recordlinkage`
* Purpose: **Join different datasets when they don't share a unique identifier.** See [Documentation](https://recordlinkage.readthedocs.io/en/latest/ref-index.html)
  1. **Init an indexer**
    * `idxr = recordlinkage.Index()`
  2. Blocking: only **choose pairs of entries that have the same value under specified column** (e.g. "cuisine_type")
    * `idxr.block("col_name")`
  3. **Generate said pairs of indexes** which agree on the equal columns
    * `mltIdx_pairs = idxr.index(df1, df2)`
      * Example pair: MultiIndex([(0,0),(0,1),(0,7),(1,0),(1,4)...])
  4. **Specify the columns to compare** with a Compare object
    * `comp = recordlinkage.Compare()`
      * Then, specify the columns to compare by:
        * `comp.exact('col_nm_in_df1', 'col_nm_in_df2', label='new_lbl_in_new_df')`
          * Entries must **exact match** in the columns
          * e.g. comp.exact('city', 'city', label='city')
        * `comp.string('col_nm_in_df1', 'col_nm_in_df2', label='new_lbl_in_new_df', threshold = dbl_frm_0-1)` (threshold usually 0.8)
        * Entries must be **similar** (in terms of string) in the columns
  5. Apply the Compare object to **get a dataframe highlighting potential matches**
    * `df_pttl_mtchs = comp.compute(mltIdx_pairs, df1, df2)`
      * Structure of df_pttl_mtchs:
        * Index / Col 0: mltIdx_pairs
        * Columns: columns used for comparison
          * exact: 1 if equal else 0
          * string: 1 if threshold met, else 0
  6. **Filter matches** from potential matches
    * `df_mtchs = df_pttl_mtchs[df_pttl_mtchs.sum(axis=1) >= 3]`
      * If the val == 1 then there's a match on that column. This counts the number of matched columns, and filters by that.
      * In this case there were 3 columns so 3 was chosen
  7. **Select matched indexes** for one of the DFs (in this case df2)
      * `idx_df2_mtched = df_mtchs.index.get_level_values(1)`
        * df_pttl_mtchs & df_mtchs use a MultiIndex. 
        * df_mtchs.index.get_level_values(0) = df1's indexes, (1) = df2's indexes
  8. **From df2, remove entries that match df1's entries**
    * `df2_notInDf1 = df2[~df2.index.isin(idx_df2_mtched)]`
  9. **Join df1 and the new df2 entries**
    * `df1.append(df2_notInDf1)`

### fuzzywuzzy (String Comparison)
* **Import**: `from fuzzywuzzy import process`
* **Test similarity:** `process.extract('target_word', arr_of_candidate_words, length_of_arr)`
  * Returns array of tuples: `[('candidate_word', similarity_score), ...]`
    * similarity_score: from 0 - 100, 100 as perfect, 80 as close enough

### missingno (Visualize missing data)
* `import missingno as msno`
* msno.matrix(df_with_missingvals); plt.show()

### scipy.stats (zscore)
* `from scipy.stats import zscore`
* calculate zscore values: `zscore(df['col'])`
  * z-score is the number of standard deviations by which an observation is above the mean - so if it is negative, it means the observation is below the mean.

### matplotlib.pyplot
`import matplotlib.pyplot as plt`
* Think of `plt` as some kind of a global variable to attach stuff to
* Change Styles:
  * **Use style**: `plt.style.use(style_name)`
  * **Show available styles**: `plt.style.available`
* Graphs
  * Create multiple graphs:
    * Automatically using `plt.subplot(rows, columns, active_subplot_idx)`
      * Call the function with a new `active_subplot_idx` = row x rowlen * column to change the current graph.
        * `active_subplot_idx` starts from 1
    * Specify axes directly: 
    * **Change axes**: `plt.axes([xlower, ylower, width_%, height_%])`, args passed as a list
      * Think of these as rectangle bounds of your current graph.
        * e.g. if you want 2 graphs side-by-side: 
          * First set the axes for the left one `plt.axes([0.05, 0.05, 0.425, 0.9])` 
          * Then plot the left graph `plt.plot(year, physical_sciences, color='blue')`
          * The set the axes for the right one `plt.axes([0.525, 0.05, 0.425, 0.9])`
          * and plot that graph `plt.plot(year, computer_science, color='red')`
  * Plot graph in active subplot:
    * **Plot line**:
    ```
    plt.plot(x_positions_of_points, y_positions_of_points, 
        color='blue', 
        label=str     # Used to label the line in the legend
    )
    ```
    * **Scatter**: `plt.scatter(x_data, y_data, label='data', color='red', marker='o')`
    * **Add title**: `plt.title(str)`
    * **Change x and y labels**: `plt.xlabel(str)` and `plt.ylabel(str)`
    * **Change x and y limits (set range)**: `plt.xlim(lower,upper)` and `plt.ylim(lower,upper)`
      * Inclusive
      * **Change both at the same time**: `plt.axis((x_lower,x_upper,y_lower, y_upper))`
  * **Improve the spacing between subplots**: `plt.tight_layout()`
  * **Add legend**: `plt.legend(loc='lower center')`
  * **Annotate**
    ```
    plt.annotate(text, 
        xy=(x_pos, y_pos),    # xy of value you're pointing to
        xytext=(x_pos, y_pos), 
        arrowprops=dict(facecolor='black')
    )
    ```
  * **2D histogram**:
    * `plt.hist2d(horizontal_data, vertical_data, bins=(x_cols, y_rows), range=((x_min, x_max), (y_min, y_max)))`
    * Instead of plotting the points directly on a graph, you turn it into something of a density map; the graph is split into a grid, and boxes with a lot of points will have a color of higher intensity.
  * **2D hex histogram**:
    * `plt.hexbin(horizontal_data, vertical_data, gridsize=(x_cols, y_rows), extent=(x_min, x_max, y_min, y_max))`
  * **Display points w/ color**: `plt.pcolor(2D_arr,...)`
    * Add param `cmap='Blues'` to config colormapping to Blues
  * **Display color and intensity mapping**: `plt.colorbar()`
    * Note that the bottom left part of the image maps to the top left part of the numpy array
  * **Display points as contours**: `plt.contour(X, Y, Z, contour_count, cmap='color_map')`
    * Filled: `plt.contourf(...)`
    * [See](https://jakevdp.github.io/PythonDataScienceHandbook/04.04-density-and-contour-plots.html)
* Images
  * **Load img**: `npRGB = plt.imread(filepath)`
  * **Display img**: 
  ```
  plt.imshow(npRGB,
      cmap='gray',
      extent=(-1, 1, -1, 1) # horizontal extent from -1 to 1, vertical extent from -1 to 1
      aspect=1              # aspect ratio (# of vertical pixels : # of horizontal pixels). 
                            # \lt 1 means img is squashed downwards; \gt 1 means img is stretched upwards
  )
  ```
    * Add cmap if only 1 channel
  * **RGB to monochannel**: `npRGB.sum(axis=2)`
  * **Hide axes**: `plt.axis('off')`
  * Others:
    * Normalize intensity:
      * `256*(img-img.min())/(img.max()-img.min())`
* Export:
  * **Show on GUI**: `plt.show()`
  * **Save to file**: `plt.savefig(filepath)`

### seaborn
`import seaborn as sns`
* **Simple linear regression**:
  ```
  sns.lmplot(x='x_pos_col_in_df', y='y_pos_col_in_df', data=dataframe
      hue='categorical_col_in_df', # This will be used to group each point
      row='groupby_row_wise'
      palette='Set1'
  )
  ```
  * straight line best fit
  * hue: e.g. you have a col "gender" that allows only {'M','F'}. 
    * Graph will color points that have value 'M' to one color, and 'F' to another color (i.e. groupby)
  * row: same purpose as hue, but groupby row-wise
    * i.e. Segregate points by each category and plot a separate graph for each
  * plots on current plt graph. Use `plt.show()` to show 
* **2nd order regression**: 
  ```
  sns.regplot(x='x_col_in_df', y='y_col_in_df', data=dataframe,
      color='green', 
      scatter=None,         # Set scatter to None if you don't want to plot the scatter points; else ignore this line
      order=2,              # 1 for simple lin. regr., 2 for 2nd order etc
      label='legend_label'  # label for legend
  )
  ```
  * curved line best fit
  * 
* **Residual plot**: `sns.residplot(x='x_col_in_df', y='y_col_in_df', data=dataframe, color=color_str)`
  * Visualize how far datapoints diverge from the regression line.
## Numpy
* **Import**: ```import numpy as np```
* **Numpy Array**
  * Creation
    * **Create array**: ```np.array(list)```
  * Attributes
    * **Shape**: `np_list.shape`
  * Unary Operations
    * **Transpose array**: `np.transpose(list)`
  * Operation with scalar
    * **Slicing 2D numpy array (get row / get col)**: `np_2d[row,:]`, `np_2d[:,col]`
    * **Mass multiplication**: `np_list *= val`
    * **Iterate 2D array as 1D**: `for x in np.nditer(np_2d_arr)`
  * Operations involving two numpy arrays
    * **Mass operation**: `np_list3 = np_list1 / np_list2`
    * **Union**: `np.logical_and(arr1, arr2)`
    * **Intersect**: `np.logical_or(a1,a2)`
    *** Negation of numpy arr**: `np.logical_not(a1,a2)`
  * Operations involving boolean arrays
    * **Generate boolean array by applying condition to array**: `bool_val = np_list > val`
    * **Subsetting with bool array**: `np_list[bool_val]`
  * Aggregation Operations
    * **Mean**: `np.mean(np_list)`
    * **Median**: `np.median(np_list)`
    * **Std Dev**: `np.std(np_list)`
    * **Correlation Coeff**: `np.corrcef(np_list1, np_list2)`
* **Numpy Random**
  * **Init with Seed**: `np.random.seed(seed)`
  * **Generate Float** 0-1: ` np.random.rand()`
  * **Generate Integer**: `np.random.randint(lowerIncl, upperExcl)`
* **Definitions**
  * **NaN**: `np.nan`
* **Operations**
  * **Log10**: `np.log10(nd_arr or dataframe)`
* **Generate uniformly spaced list**: `np.linspace(lower_lim, upper_lim, number_of_items)`
* **Meshgrid: create a grid by using coordinates of each dimension**: `np.meshgrid(columns, rows)`
  * [See](https://stackoverflow.com/a/42404323)

## Pandas
* **Import**: `import pandas as pd`
* **Series** (Pandas labelled list)
  * **From list**: `pd.Series(array, ..., index=arr)`
* **DataFrame** (Pandas labelled excel sheets / dictionaries)
  * **Converting into DataFrame**
    * **From Dictionary**: ```pd.DataFrame(dict)```
    * **From CSV File**: 

      ```
      dataframe = pd.read_csv(string_filename, 
          delimiter   = str,          # The shorthand 'sep' serves the same purpose
          header      = line_no_start_of_data, 
          index_col   = i, # Column to use as row labels of the df. Set to False to force pandas not to use the first column as the index, or to a col name if you want to use that col

          [chunksize   = n, 
          names       = new_col_labels_list, 
          comment     = str_prefix, 
          parse_dates = [date_col...]
      )
      ```
      * Note that dataframes are iterables, so you can use "next(iterable)" on them (to get them in the chunksize)
  * **Converting from DataFrame**
    * **To set**: `set(df['col'])`
  * **Accessing**:
    * **For Loop for each row** (note that row is a dataframe / dictionary)
      * `for idx, row in df.iterrows(): ...`
    * Slicing
      * **Get column as Series**: `dataframe["column"]`
        * **Convert series to numpy.ndarray**: `series.values`
      * **Extract columns from DF**: `dataframe[["column",...]]`
        * **Dataframe as rows**: `dataframe[startIdxIncl: endIdxExcl]`
    * Array based selection
      * **Select by label**: 
        * `dataframe.loc[label]` (transposed / series / numpy array)
        * `dataframe.loc[[rowLbl1, rowLbl2..* .],[colLbl1, colLbl2...]]` (tabular / dataframe)
        * **Select by index**: Replace loc with iloc
          * `df.iloc[<slicing for row>, <slicing for column>]`
        * **Select all rows by column**: Replace label with ':' 
          * `dataframe.loc[<slicing for row>, <slicing for column>]`
          * `dataframe.loc[:,col]` (Returns numpy array)
          * `dataframe.loc[:,* [cols]]` (Returns Dataframe)
        * **MultiIndexes**: `df.loc[(top_lvl_idx,2nd_lvl_idx,...), <slicing for column>]`
          * e.g. `sales.loc[('NY',1),:], sales.loc[(slice(None),2),:]`
          * If you have to use `:` for slicing, replace the tuple with `pd.IndexSlice[top_lvl_idx,2nd_lvl_idx,...]`
            * e.g. `df.loc[pd.IndexSlice[:,2nd_lvl_idx,...], <slicing for column>]`
            * *Datacamp loves to create the alias `idx=pd.IndexSlice` to shorten the .loc call.*
          * MultiIndexes: the index is an array instead of a single value (think of nested arrays. e.g. arr[1][2], MultiIndex would be (1,2) or something)
        * **By Datetime** (if index is datetime): `ts0.loc['2010-August':'2010-10-11 22:00:00']` 
          * *can even be like '2010-Aug'*
        * (See more: https://www.w3resource.com/pandas/dataframe/dataframe-loc.php)
          * slicing refers to x[start:end:step].
          * Special slices:
            * [:] => Select all
            * [n:] => from the nth element (inclusive) to the end; note that n starts from 0
            * [:n] => from the first element to the nth element
    * Conditional Select
      * **Get**: `dataframe**[dataframe["column"] == condition]`
      * **Assignment:** `df**.loc[df['col'] <condition>] = value_to_assign`
      * **Multiple conditional**: `(df['col'] == condition) & (df['col'] == condition)`
      * `dataframe["col"] = dataframe['col'] == condition`
    * **Get data as datetime**: df['col'].dt
      * **Format datetime**: df['col'].dt.strftime('formatstr')
        * formatstr: e.g. '%Y' to only get the year
    * **Get data as str**: df['col'] = df['col'].str
      * *This can be combined by concatenating string functions behind e.g. lower(), strip(), upper(), replace(dict), replace("old","new"), len()*
      * *Note that these string functions return a df, which can be combined with other str or aggregation functions*
  * **Modifying Data**:
    * New Column:
      * **Add new value**: `df.loc[lbl, col] = val` (do this for every row to add the column)
      * **Set column to that value for every row**: `df['col'] = val`
      * **Modify by transformation function**: `df**["newCol"] = df["oldCol"].apply(transformFx)`
      * **Modify by mapping values to a dictionary**: `df['col'].map(dict_map_vals)`
    * New Row:
      * **Append**: `df.append(df,ignore_index=bool)`
        * *Ignore index: Preserve index (False) or Number everything from 0 to n (True)*
      * **Concatenating / Joining list of series/dataframes**: 
        ```
        pd.concat(list_of_dataframes, # Concatenating a dictionary will result in the keys becoming the indexes
            axis=num,         # 0/’index’ (rows), 1/’columns’
            keys=['one','col','name','per','dataframe','in','list'],
            join='inner',     # optional, keep only rows that share common index labels.
            ignore_index=bool # If True, prevents repeated integer indices
        )
        ```
        * [axis{0/’index’, 1/’columns’}, default 0](https://pandas.pydata.org/pandas-docs/stable/reference/api/pandas.concat.html)
          * 0: Stack below ("vertically"), 1: Stack to the right ("horizontally")
        * Keys: 1 key per DataFrame in the list, forming the outer index in the MultiIndex. The resulting DataFrame will be something like df['one'][n] to access the first DataFrame, df['col'][n] to access the 2nd DataFrame etc.
        ```
        # Inner join, Equivalent to pd.concat([leftDF, rightDF], 'columns', join='inner')
        pd.merge(leftDF, rightDF, 
            on=column_label, # See exposition below
            how='inner',     # Type of join. See below
            suffixes=[sfx_forDF1, sfx_forDF2] # If both DFs have columns of same name, add suffix at the end if not merging on those columns
        )
        ```
        * **on:** If multiple columns form the identifier: use `on=[col1,col2,...]`. Otherwise, the join will horizontally append copies of the columns even if they are the same.
        * **on:** If df1 and df2 use different labels for the same identifier, use `left_on` and `right_on`.
        * **how:** You can also define various types of joins as specified [here](https://mode.com/sql-tutorial/sql-outer-joins/) 
        * See [documentation](https://pandas.pydata.org/pandas-docs/stable/reference/api/pandas.DataFrame.merge.html) if need to be more specific
        ```
        # Same as pd.merge above, but designed for ordered data like time series and filling and interpolation.
        pd.merge_ordered(leftDF, rightDF,
            fill_method="ffill" # Forward-filling: Replace NaN entries with the most recent non-null entry,
            # Other params same as above)
        ```
        ```
        pd.merge_asof(...)
        # pd.merge_asof() is like the pd.merge_ordered() function; it merges values in order using the on column
        # but for each row in the left DataFrame, only rows from the right DataFrame whose 'on' column values are less than the left value will be kept.
        ```
    * Deletion:
      * **Drop columns**: `df.drop(arr_of_cols, axis='columns')`
    * Dividing one DF by another:
      ```
      DF1.divide(DF2, 
          axis='rows'/'columns' # Divide the DF1 by DF2 along each row
      )
      ```
    * Metadata:
      * Column datatype conversion
        * **Convert to datetime**: `pd.to_datetime(df['col'][,format=date_str_format,infer_datetime_format = <True/* False>,  errors = <'raise'/'coerce'/'ignore'>])`
          * A datetime column will allow you to manipulate the datetime directly & search for rows that match the date using df.loc
          * *infer_datetime_format = Infer format based on first non-NaN element. Can increase parsing speed by 5-10x (disabled by default)*
          * *errors: raise = raise exception, coerce = set to NaT, ignore = ignore*
          * Example of merging 2 string cols into 1 datetime: `times_tz_none = pd.to_datetime( la['Date (MM/DD/YYYY)'] + ' ' + la['Wheels-off Time']`)
        * **Convert to numeric**: `pd.to_numeric(df['col'], errors='coerce')`
        * **Convert to categorical**: `df['col'] = pd.Categorical(values=df['col'], categories=arr_of_values, ordered=True)` 
          * *Ordered: ordered / non-ordered categoricals*
        * **Convert numbers to categories**: `df['col'] = pd.cut(df['col'], bins = arr_of_bin_edges, labels = arr_of_categories)`
          * *arr_of_bin_edges: e.g. [0, 60, 180, np.inf]*
          * *arr_of_categories: e.g. ['short', 'medium', 'long']*
        * **Convert to others**: `df['newCol'] = df['dataCol'].astype('type')`
    * Datetime
      * **Localizing timezone**: series.dt.tz_localize("US/Central")
      * **Converting timezone**: series.dt.tz_convert("US/Central")
    * **Re-labelling columns**: df.columns = arr_of_labels

  * Unary Operations
    * Check / Get Membership
      * **Check membership (returns boolean array)**: `df['col'].isin(arr_of_acceptable_values)`
      * **Negate boolean array**: `~bool_arr`
    * **Get duplicates as boolean array**: `df.duplicated()`
      * *default behavior*: `returns exact duplicates after the first occurence`
      * *syntax*: `df.duplicated([subset = arr_of_col_names, keep = <'first' / 'last' / False>)`
        * *keep values*: `first, last or all (false) duplicate values`
    * **Drop duplicates**: `df.drop_duplicates([([subset = arr_of_col_names, keep = <'first' / 'last' / False>, inplace = bool)`
    * **Get Uniques**: `df.unique()`
    * **Find missing values**: `df.isna()`
      * *returns bool arr with same dimensions*
    * **Compute % change from the immediate previous**: `series.pct_change(offset=1)`: 
      * Row by default. Useful in comparing the percentage of change in a time series of elements. 
      * Offset is in unit time specified in sample
  * Grouping Data:
    * **Downsample time series**: `df['col'].resample(time_str_format).agg_fx()`
      * e.g. `df.Temperature.resample('6h').mean()` = group an hourly based time series into averaged quarterly data
      * `df.resample('A').mean()`: resample w/ annual frequency, assumes index is a datetime
      * `df.resample('A', on=column_label).mean()`: resample w.r.t a column label that isn't the index
    * `groupby` function:
      * **Group-by (Single index)**: `df.groupby('idx')`
      * **Group-by (Multi-Index)**: `df.groupby([indexes])`
      * **Group-by (Rows)**: `df.groupby(pd.Series(['row_vals'])`
      * Note that the groupby function should be followed up with a column + aggregate for it to be useful, unless you want to literally count the number of rows etc
        * e.g. count_by_class = by_class['survived'].count()
      * Group by Day example: `by_day = sales.groupby(sales.index.strftime('%a'))`
      * **Multiple Aggregation (columns)**: `sales.groupby('city')[['bread','butter']].max()`
        * ![](../../static/img/groupby-max.jpg)
      * **Multiple aggregation (functions)**: `sales.groupby('city')[['bread','butter']].agg(['max','sum'])`
        * ![](../../static/img/groupby-max-sum.jpg)
        * **Custom aggregation (own function)**: You can define a function that accepts a Series and returns a single value.
        * **Separate aggregation per column (dictionary)**: You can define a dictionary and put it into .agg; the key is the column, the value is the aggregation function (e.g. max, min)
        * `df.groupby(...).transform(fx)`: Transform after aggregation (group by, then transform values based on their groups)
          * Output is the same shape as before groupby.
          * e.g. `def zscore(series): return (series - series.mean()) / series.std()
          * Usage: `df.groupby('x')['y'].transform(zscore)`
    * **Filtering (after groupby)**:
      * `by_company = sales.groupby("Company")`
      * **Compute sum of 'Units'**: `by_com_sum = sales['Units'].sum()`
      * **Filter 'Units' where sum > 35**: `by_com_filt = by_company.filter(lambda g:g['Units'].sum() > 35)`
  * Aggregation Operations
    * **Aggregate duplicates**: `df.groupby(by = arr_of_col_names).agg(col_to_fx_dict).reset_index()`
      * *col_to_fx_dict*: e.g. {'height: 'max', 'weight': mean}
      * **sum**: `df['col'].sum()` or `df['col'].sum(axis=1)`
      * *Include axis=1 in aggregate f(x)s if you want to sum multiple columns, but keep the rows*
      * *You can also sum booleans to count number of True values*
      * **mean**: `df['col'].mean()`
      * **max**: `df['col'].max()`
      * **argmax** (idx of max val): `df['col'].argmax()`
      * **count**: `df['col'].count()`
      * **quantile**: `quantile([start, end (0-1)])`
      * **std.dev**: `std()`
      * **rolling mean**: `df['col'].rolling(window=numRows).mean()`
      * **# of uniques:** `nunique()`
      * **Count times value appeared**: `value_counts()` / `series.value_counts()`
        * Returns dataframe (dictionary)
  * Sorting Operations
    * **Sort by current index**: `df.sort_index(level=idx_lvl)`
      * You may want to change the index by using `df.set_index()` first
    * **Sort values by column name**: `df.sort_values(by = arr_of_col_names)` or `df.sort_values('col')`
      * **Sort df chosen by boolean array**: `df[duplicates_bool].sort_values(...)`
  * Windowing Operations
    * [Documentation](https://pandas.pydata.org/pandas-docs/stable/user_guide/computation.html)
    * `df.expanding()`
      * See [this](https://stackoverflow.com/questions/45370666/what-are-pandas-expanding-window-functions): "A common alternative to rolling statistics is to use an expanding window, which yields the value of the statistic with all the data available up to that point in time"
  * Operations involving DataFrame and boolean array:
    * **Get duplicate rows**: `df[df.duplicated()]`
  * Operations involving indexes:
    * **Interpolate**: `ts2_interp = ts2.reindex(ts1.index).interpolate(how='linear') `
      * in the above example, the index is changed to datetime. ts1 contains all datetime, ts2 has some missing data
    * **Changing metadata / restructuring**
      * **Reindex** (Change values of the 1st column): `df = df.reindex(col/df2.index,[method=pad/backfill/nearest])`
        * *Conform DataFrame to new index with optional filling logic, placing NA/NaN in locations having no value in the previous index. A new object is produced unless the new index is equivalent to the current one and copy=False*
      * **Change index entirely**: `df.set_index('colname',inplace=bool)`. 
        * This is usually done as an interim operation to make naivgating the DF easier, or for using `sort_index()`
        * [Reindex vs set_index](https://stackoverflow.com/questions/50741330/difference-between-df-reindex-and-df-set-index-methods-in-pandas)
      * **Reset index**: `df.reset_index()`
      * **Rename columns**: `df.columns = arr`
  * MultiIndexes    
    * **Pivot (reorder data by changing the index, columns & values. REQUIRES UNIQUE INDEX)**: 
      * `df.pivot(index=new_row_index, columns=new_columns, values=old_cols_to_vals)`
      * **Index**: Each unique value in the column is now a primary key of the row. Aggfunc aggregates if there are duplicate PKs.
      * **Columns**: Each unique value in the column is now a column.
      * **Values**: Each value in the column are now assigned to row-column where they occur. Aggregate if needed. 
    * **Pivot Table: Same as pivot, but deal with duplicate index values with a reduction**:
    * `df.pivot_table(same_as_pivot,aggfunc=fx/'predefined_fx', margins=bool)`
      * **margins**: If True, add a "All" row at the bottom which aggregates all data
    * **Melt: undoing a pivot**: `pd.melt(df, id_vars=['cols'], value_vars=['cols'], value_name='value_col_name'])`
      * **id_vars**: column name to keep as columns
      * **value_vars**: column names to convert into key-value pairs, under two columns: 1 column specified as "variable" which uses the original column name and the 2nd column whose name is specified by value_name
      * you can also use col_level = 0 to convert it into purely variable-value pair, removing any id_vars / indexes currently in use
      * [documentation](https://pandas.pydata.org/docs/reference/api/pandas.melt.html)
    * **Stack**: `df.stack(level='col')`
      * [stack the prescribed level(s) from columns to index](https://www.w3resource.com/pandas/dataframe/dataframe-stack.php)
    * **Unstacking**: `df.unstack(level='col'/num)`
      * [form new level of column labels whose inner-most level consists of the pivoted index labels](https://www.w3resource.com/pandas/dataframe/dataframe-unstack.php)
    * **Swap level**: `df.swaplevel(0,1)` 
      * [swap ordering of stacked levels](https://www.geeksforgeeks.org/python-pandas-multiindex-swaplevel/)
  * Operations involving two DataFrames:
    * **Joining** (with properly set indices): df1 + df2
  * Operations involving missing values and cleaning data:
    * **Drop rows/cols with missing values**: `df.dropna(subset = ['col'])`
      * See [documentation](https://pandas.pydata.org/pandas-docs/stable/reference/api/pandas.DataFrame.dropna.html)
      * **Drop rows that have a NA value in any col**: `df.dropna(how='any')`
      * **Drop rows that have all NA values** : `df.dropna(how='all')`
      * **Drop cols that have less than 1000 non-missing values**: `df.dropna(thresh=1000, axis='columns')`
    * **Impute missing vals**: `df.fillna({'col' : val_arr})`
      * See [documentation](https://pandas.pydata.org/pandas-docs/stable/reference/api/pandas.DataFrame.fillna.html?highlight=fillna#pandas.DataFrame.fillna)
    * **Count number of missing values by col**: `df.isna().sum()`
  * Operations involving visualization
    * DataFrame Info
      * **Display head**: `df.head(<rows=5>)`
      * **Display tail**: `df.tail(<rows=5>)`
      * **Display schema**: `df.info()` (Shows col name, non-null entries & datatype)
      * **Display summary stats**: `df.describe()` (also works on columns of the df)
      * **Display datatype**: `df.dtype` or `df.dtypes` (works on columns of the df)
      * **Size / Length / Shape**: `df.shape`
    * Plotting data from DataFrame:
      * `dataframe.plot(kind='scatter', x='col1', y='col2', [color='str', s=size_value,subplots=bool])`
        * you can plot all data by omitting x and y
        * subplots: plot in separate graphs
      * `df.boxplot(column = [y_axis_col_values], by=[x_axis_col_values])`
      * `ax = df[list_of_columns].plot() `
        * You can customize the plot by calling the functions below on ax:
          * `ax.set_ylabel("% Change of Host Country Medal Count")`
          * `ax.set_title("Is there a Host Country Advantage?")`
          * `ax.set_xticklabels(editions['City'])`
        * plot all of the columns (their x and y) on the same graph with their own colours
        * plt.title(str)
        * plt.xlabel(str)
        * plt.ylabel(str)
        * plt.show()
      * Subplots
        * `fig, axes = plt.subplots(nrows=num_of_rows, ncols=num_of_columns)`
        * `df.plot(ax=axes[0], kind='hist', normed=True, bins=30, range=(0,.3))`
        * `df.fraction.plot(ax=axes[1], kind='hist', normed=True, cumulative=True, bins=30, range=(0,.3))`
          * `kind='bar'`
