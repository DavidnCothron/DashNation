import React from 'react';
import logo from './logo.svg';
import './App.css';
import { ApolloProvider } from '@apollo/react-hooks';
import ApolloClient from 'apollo-boost';
import Header from './components/header/Header';

const client = new ApolloClient({
    uri: 'http://localhost:5000',
});

function App() {
  return (
    <ApolloProvider client={client} style={{ height: '0px', margin: '0', padding: '0' }}>
      <div style={{ height: '100%', width: '100%', }}>
        <Header />
        <div>
          <h2>My first Apollo App</h2>
          <section>
              <h3>Some text section</h3>
              <div
                style={{
                  height: '150px',
                  background: 'rgb(171, 182, 194)',
                }}
              >

              </div>
              <br />
              <p>
                Some say some sections are sorta screwed somehow so suddenly. Sample Script.
                <br />
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nibh venenatis cras sed felis eget velit aliquet sagittis. Est sit amet facilisis magna etiam tempor orci. Risus in hendrerit gravida rutrum quisque non tellus orci. Diam sit amet nisl suscipit adipiscing bibendum est ultricies. Magnis dis parturient montes nascetur ridiculus mus mauris vitae. Duis ut diam quam nulla porttitor massa id. Nec feugiat in fermentum posuere. Aenean sed adipiscing diam donec. Ut pharetra sit amet aliquam id diam maecenas. Id velit ut tortor pretium viverra suspendisse potenti. Turpis massa tincidunt dui ut ornare lectus sit amet. Laoreet id donec ultrices tincidunt arcu non sodales. Id diam maecenas ultricies mi eget. Ipsum suspendisse ultrices gravida dictum fusce ut placerat. Quis risus sed vulputate odio ut. Quis vel eros donec ac odio tempor.
                </p>
                <p>
                 Tellus in hac habitasse platea. Auctor augue mauris augue neque gravida in fermentum et sollicitudin. Proin sagittis nisl rhoncus mattis rhoncus. Nisl rhoncus mattis rhoncus urna neque viverra justo nec ultrices. Semper risus in hendrerit gravida rutrum quisque. Erat velit scelerisque in dictum non. Tellus elementum sagittis vitae et leo. Amet facilisis magna etiam tempor. Magna eget est lorem ipsum dolor. Faucibus et molestie ac feugiat sed lectus vestibulum mattis ullamcorper. Nibh ipsum consequat nisl vel pretium lectus. Mi ipsum faucibus vitae aliquet nec ullamcorper. Dictum non consectetur a erat nam at. Feugiat sed lectus vestibulum mattis ullamcorper. Aliquet porttitor lacus luctus accumsan. Neque ornare aenean euismod elementum nisi quis. Tincidunt nunc pulvinar sapien et ligula.
                </p>
                <p>
                  Quis commodo odio aenean sed adipiscing. Ipsum suspendisse ultrices gravida dictum fusce ut placerat. Commodo elit at imperdiet dui accumsan sit amet. Vel turpis nunc eget lorem dolor sed. Bibendum ut tristique et egestas quis ipsum. Ullamcorper morbi tincidunt ornare massa eget. Faucibus a pellentesque sit amet porttitor eget dolor morbi. Consectetur adipiscing elit duis tristique sollicitudin nibh sit amet. Ante in nibh mauris cursus mattis molestie. Sed nisi lacus sed viverra tellus in hac habitasse. Metus dictum at tempor commodo ullamcorper a lacus. Massa ultricies mi quis hendrerit dolor magna. Et netus et malesuada fames ac. Aliquam ut porttitor leo a. Ante metus dictum at tempor commodo. A scelerisque purus semper eget.
                </p>
                <p>
                  Pulvinar neque laoreet suspendisse interdum. Arcu vitae elementum curabitur vitae nunc sed. Consequat mauris nunc congue nisi vitae. Lorem ipsum dolor sit amet consectetur adipiscing elit. Erat velit scelerisque in dictum non consectetur a erat. Ut tortor pretium viverra suspendisse. Id interdum velit laoreet id donec ultrices. Viverra nibh cras pulvinar mattis nunc sed blandit libero volutpat. Lectus urna duis convallis convallis tellus. Senectus et netus et malesuada fames ac. Euismod in pellentesque massa placerat. Arcu vitae elementum curabitur vitae nunc. Nulla pellentesque dignissim enim sit.
                </p>
                <p>
                  Ullamcorper malesuada proin libero nunc consequat. Diam sit amet nisl suscipit adipiscing bibendum est ultricies integer. Gravida quis blandit turpis cursus in hac habitasse platea dictumst. Nulla pellentesque dignissim enim sit. Sagittis eu volutpat odio facilisis mauris. Pharetra massa massa ultricies mi. Nibh tortor id aliquet lectus proin nibh nisl condimentum. Massa vitae tortor condimentum lacinia quis. Ac tortor dignissim convallis aenean et tortor. Turpis massa sed elementum tempus egestas sed. Eros in cursus turpis massa tincidunt. Ac turpis egestas integer eget aliquet nibh praesent tristique magna. Vitae justo eget magna fermentum iaculis. Massa massa ultricies mi quis hendrerit dolor magna eget est. Vulputate enim nulla aliquet porttitor lacus. Viverra adipiscing at in tellus integer feugiat scelerisque varius morbi. Enim tortor at auctor urna nunc id cursus. Arcu dui vivamus arcu felis bibendum ut tristique et. Pellentesque dignissim enim sit amet venenatis.
                </p>
                <p>
                  Proin libero nunc consequat interdum varius sit amet mattis vulputate. Ullamcorper a lacus vestibulum sed arcu non odio euismod lacinia. Odio ut enim blandit volutpat maecenas volutpat. Arcu non sodales neque sodales. Aliquam ut porttitor leo a diam sollicitudin. Cursus vitae congue mauris rhoncus aenean vel. Et magnis dis parturient montes nascetur ridiculus mus mauris vitae. Lobortis scelerisque fermentum dui faucibus in ornare quam. Sodales ut etiam sit amet nisl purus in mollis. Adipiscing diam donec adipiscing tristique risus.
                </p>
                <p>
                  Cum sociis natoque penatibus et magnis dis parturient montes nascetur. In tellus integer feugiat scelerisque varius morbi enim. Pellentesque habitant morbi tristique senectus et netus et. Malesuada fames ac turpis egestas sed tempus urna. Id donec ultrices tincidunt arcu non sodales neque sodales ut. Elementum tempus egestas sed sed. Bibendum ut tristique et egestas quis. Et sollicitudin ac orci phasellus egestas. Convallis aenean et tortor at risus. Mattis vulputate enim nulla aliquet porttitor lacus luctus. Sed libero enim sed faucibus turpis in eu mi. Aliquam ultrices sagittis orci a. Vitae congue mauris rhoncus aenean vel elit scelerisque mauris pellentesque. Scelerisque purus semper eget duis at tellus at urna. Enim blandit volutpat maecenas volutpat blandit aliquam etiam erat velit. Quisque sagittis purus sit amet volutpat consequat mauris. Mattis enim ut tellus elementum sagittis vitae. Etiam non quam lacus suspendisse faucibus. Sapien pellentesque habitant morbi tristique senectus et.
                </p>
                <p>
                  Cras adipiscing enim eu turpis egestas. At urna condimentum mattis pellentesque. Vulputate odio ut enim blandit volutpat. Sed blandit libero volutpat sed cras ornare arcu dui vivamus. Enim facilisis gravida neque convallis a cras semper auctor neque. Mauris cursus mattis molestie a iaculis at erat. Amet est placerat in egestas erat imperdiet sed euismod. Risus in hendrerit gravida rutrum quisque non tellus orci. Feugiat vivamus at augue eget. Accumsan sit amet nulla facilisi. Viverra ipsum nunc aliquet bibendum enim. Semper viverra nam libero justo laoreet. Cursus mattis molestie a iaculis at. Eget nullam non nisi est sit amet facilisis.
                </p>
              </p>
          </section>
        </div>
      </div>
    </ApolloProvider>
  );
}

export default App;
