# react-course 
the benefit of react :
write single line of code, 
html display the text on the webpages
css the style
js alow you to make actions and interactively

* how website work for many years
user clink / make interaction the server response with new html file ,user make another request the sever will response to front end with new html page
this is problem single page appearing 


## react concepts
1. we don't change the dom directory (js manipulate the dom el the dom api allow us to make any change (delete,create,change)),react make blueprint for webpage but we have events so we want data for describe website(state) then react know what should change 
2. reusable component that make the website,
 as lego blocks(blueprints,material ui,bootstrap-react)
3.  component is js function
 that accept prop (attribute) (as function || as class) its contain html file inside js witch called jsx.

    ``` component architecture: we can have data about our application ,and we built these react components together = app  (reuse and share components) ```

4. Unidirectional data flow(احادي الاتجاه)
 think of react thats is a function accept state and components,its going to create virtual dom (js version of the dom) its give the react blueprint of how should it update the actual dom . the mean of unidirectional data flow any time we want dom to change website ,we have to change the state,if change state the react combine state and component we has and update the dom.(data can move down on one direction),its easy to debug the code


5. React is UI library (view)
  core react library : allow us to write html inside js / make virtual dom
  rect dom library : that interact with dom ,the robot that compare the change(dom,virtual) and re render the specific components not all website



## API
 in the past when we make a request the response is pages , now with api the response is data , we can make many requests from third party api or you own server

 example of apis : ``` https://jsonplaceholder.typicode.com/users ```


### class components 
 * contain render method that display elements and constructor and super method that call the constructor method ,that allow us to access ``` this.state ``` inside Component

 * ``` state ``` similar to js object , to change it use ``` this.setState ``` ,we cant change it directory (because react Unidirectional) 

#### children 
anything that you bass between the open and closed tag.
example ``` make layout for page that contain the generic layout(header and footer) ,then call the layout and pass children(dynamic data) 

#### key
if any el inside parent el update i only update one element get effected
``` https://adhithiravi.medium.com/why-do-i-need-keys-in-react-lists-dbb522188bbb ```
make sure that when we change this el will render just this element

### why do we break things down into components?
1. reuse the component(we can use on different place and different app ),we make things more flexible
2. performance improvement and easy to test

### state vs props
* specific state live on one location,and data pass down as a props
* every time when state change ,it will pass new data to props and call render methods.(as tree who care about changed will re render)
* ``` setState ``` async ,so if we want something executing after update use the second arg callback function(every time we call setState it will re render)

### synthetic events(face event)
* every time user make event the function inside face event will run

### why we have .js files and jsx files?
web hack
babel => transform all modern js/jsx into older version of js in the public folder when we run the build script.


### functional component
* just get a props and return html.(presentational component)
its don't have access to state because don't have access to constructor thats is class method

### why we put state on app.js file(decide where put state)
the data flow on one why and cardList.js need the filter value to make filtered array (we cant access if filter value inside search component)
``` lifting state up ```

### this
this=>reference to context in witch is being invoked.
this set to the context of class component 
* ``` this.newFunction= this.newFunction.bind(this) ``` 
this here is constructor that ref to component
* arrow function automatically bind to the place when arrow function are defined .


### what is react do ?
its hard to update el on the dom, so react make virtual dom (copy the dom) ,when we make update its copy the virtual dom again and apply the change to the new virtual dom the compare the virtual dom2 with actual dom,and can make multiple updates