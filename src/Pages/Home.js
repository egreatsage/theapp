import React, { useEffect, useState } from 'react'
import {Button,Card,Grid,Container,Image} from 'semantic-ui-react'
import { useNavigate } from 'react-router-dom'
import { collection, onSnapshot } from 'firebase/firestore'
import { db } from '../Firebase'
const Home = () => {
  const [images,setImages] = useState([])
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate();

  useEffect(() => {
    setLoading(true);
    const unsub = onSnapshot(collection(db, 'images'), (snapshot) =>{
      let list = [];
      snapshot.docs.forEach((doc)=>{
        list.push({id: doc.id, ...doc.data})
      });
      setImages(list)
      console.log(images)
      setLoading(false)
    },(error)=>{
      console.log(error)
    }
  );
    return()=>{
      unsub();
    };
  }
    ,[])
   
  return (
    <div>
      <Container>
        <Card.Group>
          <Grid columns={3} stackable>
            {images && images.map((item)=>(
              <Grid.Column key={item} >
                <Card>
                  <Card.Content  >
                    <Image 
                    src={item.img}
                    size='medium'
                    
                    style={{
                             height:'150px',
                              width:'150px',
                              borderRadius:'50%'
                          }}
                          />
                  </Card.Content>
                  <Card.Content>
                  {item.email}
                  </Card.Content>
                 
                </Card>
              </Grid.Column>
            ))}
          </Grid>
        </Card.Group>
      </Container>
    </div>
  )
}

export default Home