import { Html, useProgress } from '@react-three/drei';


const Loader = () => {
  const { progress } = useProgress();

  return (
    <Html>
      <span className='canvas-load'></span>
      <p style={{
        fontSize: 14,
        color: '#f1f1f1',
        fontWeight: 800,
        marginTop: 40,
        textAlign: 'center'
      }}>{progress.toFixed(2)}%</p>

      <div className="h-6 min-w-[150px] w-full bg-gray-200 rounded-full dark:bg-gray-700">
        <div className="h-6 bg-[#20b2aa] text-md font-medium text-blue-100 text-center p-1 leading-none rounded-full" style={{ width: `${progress.toFixed(2)}%` }}>Loading... </div>
      </div>
    </Html>
  )
}

export default Loader