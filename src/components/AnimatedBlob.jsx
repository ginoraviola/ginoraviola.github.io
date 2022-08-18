import { ReactComponent as Blob } from '../static/blob.svg'
import { ReactComponent as Blob2 } from '../static/blob2.svg'
import { ReactComponent as Blob3 } from '../static/blob3.svg'

const AnimatedBlob = ({ size }) => {
  return (<>
    <Blob className={`absolute top-0 -left-4 bg-slate-100 rounded-full mix-blend-multiply filter blur-xl opacity-40 animate-blob`}>
    </Blob>
    <Blob2 className={`absolute top-0 -right-4 bg-slate-300 rounded-full mix-blend-multiply filter blur-xl opacity-40 animate-blob animation-delay-2000`}>
    </Blob2>
    <Blob3 className={`absolute -bottom-8 left-20 bg-slate-400 rounded-full mix-blend-multiply filter blur-xl opacity-40 animate-blob animation-delay-4000`}>
    </Blob3>
    {/*<Blob className="absolute mix-blend-multiply filter opacity-70 animate-blob scale-125"/>*/}
    {/*<Blob2 className="absolute mix-blend-multiply filter opacity-70 animate-blob animation-delay-2000 scale-125"/>*/}
    {/*<Blob3 className="absolute mix-blend-multiply filter opacity-70 animate-blob animation-delay-4000 scale-125"/>*/}
  </>)
}

export default AnimatedBlob;