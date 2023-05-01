import { ReactElement } from 'react';
import { Box, SimpleGrid, Icon, Text, Stack, Flex } from '@chakra-ui/react';
import { BsKeyboard, BsCheckSquare } from 'react-icons/bs';
import { BiLogIn } from 'react-icons/bi';
import { AiOutlineDoubleRight } from 'react-icons/ai';
import { Center } from '@chakra-ui/react';

interface FeatureProps {
  title: string;
  text: string;
  icon: ReactElement;
}

const Feature = ({ title, text, icon }: FeatureProps) => {
  return (
    <Stack>
      <Flex align={'center'} justify={'center'}>
        <Center
          w={20}
          h={20}
          color={'white'}
          rounded={'full'}
          bg={'gray.800'}
          mb={1}
        >
          {icon}
        </Center>
      </Flex>
      <Text fontWeight={600}>{title}</Text>
      <Text color={'gray.800'}>{text}</Text>
    </Stack>
  );
};

export default function Lowerscreen() {
  return (
    <Box p={12}>
      <Text
        color={'black'}
        as={'span'}
        fontWeight='bold'
        fontSize={{ base: 'lg', lg: '2xl' }}
      >
        <Center color='black'>
          町内の情報と住民をつなぐ情報共有プラットホーム
        </Center>
      </Text>
      <br />
      <Text
        color={'black'}
        as={'span'}
        fontSize={{ base: 'lg', lg: '5xl' }}
        fontWeight='bold'
      >
        <Center color='black'>Kairanban</Center>
      </Text>

      <SimpleGrid columns={{ base: 1, md: 5 }} spacing={20} p={20}>
        <Feature
          icon={<Icon as={BiLogIn} w={14} h={14} />}
          title={'1. 新規登録及びログインする'}
          text={'New Registration and Login'}
        />

        <Center>
          <Icon as={AiOutlineDoubleRight} w={35} h={35} />
        </Center>

        <Feature
          icon={<Icon as={BsKeyboard} w={14} h={14} />}
          title={'2. 情報を投稿する及び編集する'}
          text={'Posting and Editing Information'}
        />

        <Center>
          <Icon as={AiOutlineDoubleRight} w={35} h={35} />
        </Center>

        <Feature
          icon={<Icon as={BsCheckSquare} w={14} h={14} />}
          title={'3. 他人の投稿記事を読んだら、既読チェックする'}
          text={'When you read someone else post, check your read'}
        />
      </SimpleGrid>
    </Box>
  );
}
