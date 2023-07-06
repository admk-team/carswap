import React from 'react'
import Layout from '../Layouts/Layout';

const Index = ({auth}:any) => {
  return (
    <>
      <div className="container-fluid">
        <div className="d-sm-flex align-items-center justify-content-between mb-4">
            <h1 className="h3 mb-0 text-gray-800">Brands</h1>
        </div>
      </div>
    </>
  )
}
Index.layout = (page) => <Layout children={page} />;
export default Index