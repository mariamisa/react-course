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