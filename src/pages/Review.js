import React,{useState,useEffect} from 'react'
import Navbar from '../components/Navbar/Navbar'
import { useLocation } from 'react-router-dom'
// import details from '../details.json'
import MainReviewContainer from '../components/MainReview/MainReviewContainer';
import {db} from '../config' 
import EnterBtn from '../components/MainReview/EnterBtn';

var details = `{
    "details":{
        "123456781":{
            "desc":"potato potato",
            "rid":"123456781",
            "date":"1-2-2022",
            "crop":"potato",
            "noofcases":3,
            "location":"bangalore",
            "soil":"red soil",
            "noofimages":6,
            "lock":0
        },
        "123456782":{
            "desc":"potato potato",
            "rid":"123456782",
            "date":"1-2-2022",
            "crop":"potato",
            "noofcases":3,
            "location":"bangalore",
            "soil":"red soil",
            "noofimages":6,
            "lock":0
        },
        "123456783":{
            "desc":"potato potato",
            "rid":"123456783",
            "date":"1-2-2022",
            "crop":"potato",
            "noofcases":3,
            "location":"bangalore",
            "soil":"red soil",
            "noofimages":6,
            "lock":0
        },
        "123456784":{
            "desc":"potato potato",
            "rid":"123456784",
            "date":"1-2-2022",
            "crop":"potato",
            "noofcases":3,
            "location":"bangalore",
            "soil":"red soil",
            "noofimages":6,
            "lock":0
        },
        "123456785":{
            "rid":"123456785",
            "date":"1-2-2022",
            "crop":"potato",
            "noofcases":3,
            "location":"bangalore",
            "soil":"red soil",
            "noofimages":6,
            "desc":"potato potato",
            "lock":0
        },
        "123456786":{
            "desc":"potato potato",
            "rid":"123456786",
            "date":"1-2-2022",
            "crop":"potato",
            "noofcases":3,
            "location":"bangalore",
            "soil":"red soil",
            "noofimages":6,
            "lock":0
        },
        "123456787":{
            "desc":"potato potato",
            "rid":"123456787",
            "date":"1-2-2022",
            "crop":"potato",
            "noofcases":3,
            "location":"bangalore",
            "soil":"red soil",
            "noofimages":6,
            "lock":0
        }

    }
}`;

const Review =  () => {
    const location = useLocation()
    // const [loading,setLoading] = useState(true);
    // const [posts,setPosts] = useState([]);
    // useEffect(() =>
    // {
    //     const getPostsFromFirebase = [];
    //     const subscriber = db.collection('reports').onSnapshot((querySnapshot) => {
    //         querySnapshot.forEach((doc) => {
    //             // console.log("doc data is",doc.data());
    //             // var obj = JSON.parse(doc.);
    //             // console.log("doc is" + obj);
    //             getPostsFromFirebase.push({...doc.data(),key:doc.id});
    //         });
    //         setPosts(getPostsFromFirebase);
    //         setLoading(false); 
    //     });
    //     return () => subscriber(); 
    // }, []);
    // if(loading){
    //     return <h1>loading......</h1>
    // }
    
//   var key;
//   for(var [x,nkey] in posts){
//     if(x.)
//   }
  var mp = location.state.mp;
  var rid = location.state.rid;

  console.log(mp);
  console.log(rid);
  var Rid = rid.rid;
    mp = mp.mp;
var partdetail = mp;
console.log('map get in review is ',mp.get(Rid));
partdetail = mp.get(Rid);
// partdetail.lock = 1;

async function update(){
    console.log('updating');
var getdb =db.collection('reports').doc(partdetail.key);
console.log(partdetail.key);
partdetail.lock = 1;
const res = await getdb.update({lock: "1"});
console.log(res);
}
// update();
// console.log(partdetails.)

console.log("partdetail is",partdetail);

  return (
    <>
    <Navbar></Navbar>
    <MainReviewContainer partdetail = {partdetail}/>
    <EnterBtn partdetail = {partdetail}/>
    </>
  )
}

export default Review