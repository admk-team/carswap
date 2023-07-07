import React from 'react'
import Layout from './Admin/Layouts/Layout';
function Demo() {
    return (

        <h2>hello world from dmeo</h2>

   );
}
Demo.layout = (page:any) => <Layout children={page} />

export default Demo