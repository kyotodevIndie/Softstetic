import {
  AspectRatio,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Text,
} from '@chakra-ui/react'
import React from 'react'

export const ResultModal = ({
  isOpen,
  onClose,
  title,
  description,
  actives,
  url_video,
}) => {
  return (
    <Modal onClose={onClose} isOpen={isOpen} isCentered>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>{title}</ModalHeader>
        <ModalCloseButton />
        <ModalBody maxH={'100vh'} overflowY={'scroll'}>
          <Text>{description}</Text>
          <Text fontSize="sm" mt={'5px'} color={'blue'}>
            {actives.map((active) => {
              return `${active}, `
            })}
          </Text>
          <AspectRatio maxW="400px" ratio={1 / 0.7} mt="10px">
            <iframe
              width="560"
              height="315"
              src={`https://www.youtube.com/embed/${url_video}`}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </AspectRatio>
        </ModalBody>
      </ModalContent>
    </Modal>
  )
}
