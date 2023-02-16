import parse from 'html-react-parser'
import Image from 'next/image'

const ConvertBody = ({ contentHTML }) => {
  const contentReact = parse(contentHTML, {
    replace: (node) => {
      if (node.name === 'img') {
        return (
          <Image
            style={{ width: '100%', height: 'auto' }}
            {...node.attribs}
          />
        )
      }
    }
  })
  return <>{contentReact}</>
}

export default ConvertBody
