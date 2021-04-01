import { useState, useEffect } from 'react'
import { Avatar, Spin } from 'antd'
import { Box } from 'antd-styled'
import { UserOutlined, PlusOutlined, EditOutlined } from '@ant-design/icons'
import FileUploader from 'react-firebase-file-uploader'
import styled from 'styled-components'
import { storage } from 'app/services'
import PropTypes from 'prop-types'

/**
 * Avatar uploader (22 Sep 2020)
 *
 * Renders avatar uploader view component with possibility to toggle states edit view
 *
 * @since      0.0.1
 *
 * @param {string}    size      Component size (small, middle, large)
 * @param {func}      onLoad    Callback function. Return object.
 *                              example: {type: 'image', url: '...'} or {type: 'avatar', url: '...'}
 * @param {string}    imageUrl  Image URL for show the image
 *
 * @return {node}
 */

const avatarSizeMap = {
  small: { buttonSize: '30px', avatarSize: 60, icon: '30px', btnIcon: '16px' },
  middle: {
    buttonSize: '50px',
    avatarSize: 100,
    icon: '40px',
    btnIcon: '20px'
  },
  large: { buttonSize: '60px', avatarSize: 140, icon: '60px', btnIcon: '24px' }
}

const AvatarUploader = (props) => {
  const { shape, size, onLoad, imageUrl, isResetImage } = props
  const [isUploading, setIsUploading] = useState(false)
  const [avatarURL, setAvatarURL] = useState(imageUrl)

  useEffect(() => {
    if (isResetImage) {
      setAvatarURL('')
    }
  }, [isResetImage])

  const AvatarLabel = styled.label`
    width: ${avatarSizeMap[size].width || avatarSizeMap['middle'].buttonSize};
    height: ${avatarSizeMap[size].height || avatarSizeMap['middle'].buttonSize};
    border: 3px solid #eff5fd;
    background-color: #9088e5;
    border-radius: 50%;
    cursor: pointer;
    justify-content: center;
    display: flex;
    align-items: center;
    position: relative;
    color: white;
    left: 65%;
    top: -25%;

    &:hover {
      border-color: #eff5fd;
      background-color: #a095e6;
    }
  `

  const handleUploadStart = () => {
    setIsUploading(true)
    setAvatarURL('')
  }

  const handleUploadError = (error) => {
    setIsUploading(false)
    setAvatarURL(imageUrl)
    console.log('error => ', error)
  }
  const handleUploadSuccess = (filename) => {
    storage
      .ref('images')
      .child(filename)
      .getDownloadURL()
      .then((url) => {
        onLoad && onLoad(url)
        setIsUploading(false)
        setAvatarURL(url)
      })
  }

  return (
    <Box justifyContent="center" display="flex" width="100%">
      <Box width="100%">
        <Spin spinning={isUploading} style={{ width: '100%' }}>
          <Avatar
            className={avatarURL && 'animate__animated animate__zoomIn'}
            size={
              avatarSizeMap[size].avatarSize ||
              avatarSizeMap['middle'].avatarSize
            }
            shape={shape || 'circle'}
            icon={
              !avatarURL && (
                <UserOutlined style={{ fontSize: avatarSizeMap[size].icon }} />
              )
            }
            src={avatarURL}
          />
        </Spin>
        <AvatarLabel>
          {!isUploading &&
            (avatarURL ? (
              <EditOutlined
                style={{ fontSize: avatarSizeMap[size].btnIcon }}
                className="animate__animated  animate__zoomIn"
              />
            ) : (
              <PlusOutlined
                style={{ fontSize: avatarSizeMap[size].btnIcon }}
                className="animate__animated  animate__zoomIn"
              />
            ))}
          <FileUploader
            hidden
            accept="image/*"
            randomizeFilename
            storageRef={storage.ref('images')}
            onUploadStart={handleUploadStart}
            onUploadError={handleUploadError}
            onUploadSuccess={handleUploadSuccess}
          />
        </AvatarLabel>
      </Box>
    </Box>
  )
}

export default AvatarUploader

AvatarUploader.propTypes = {
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  onLoad: PropTypes.func,
  imageUrl: PropTypes.string
}
