import { sampleGet, sampleGet2 } from "./api.js"

it('test1', async () => {
  const data = await sampleGet();  
  console.log('test1')
  console.log('data1')
  expect(data.data.userId).toEqual(1);
  expect(data.status).toEqual(200);
})

it('test2', async () => {
  const data = await sampleGet2();  
  console.log('test2')
  console.log('data2')
  expect(data.data.length).toEqual(5);
  expect(data.status).toEqual(200);
})

it('test3', async () => {
  const data = await sampleGet2();  
  console.log('test3')
  console.log('test3')
  expect(data.data.length).toEqual(5);
  expect(data.status).toEqual(2012);
})

it('test4', async () => {
  const data = await sampleGet2();  
  console.log('test4')
  console.log('test4')
  expect(data.data.length).toEqual(5);
  expect(data.status).toEqual(2010);
})