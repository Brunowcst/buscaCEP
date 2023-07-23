import { Button, Form, Input} from 'antd';
import React, { useState, useEffect } from 'react';


const msg = "Por favor, preencha este campo!"

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};

const tailLayout = {
  wrapperCol: { 
    offset: 8, 
    span: 16 },
};

interface DadosProps {
  cep: string,
  logradouro: string,
  localidade: string,
  complemento: string,
  bairro: string,
  uf: string
}

const ModelForm: React.FC = () => {
  const [dados, setDados] = useState<DadosProps>()
  const [form] = Form.useForm();

  const onReset = () => {
    form.resetFields();
  };

  const onSubmit = async (values: any) => {
    
    try {
    let response = await fetch(`https://viacep.com.br/ws/${values.cep}/json/`, {
      method: 'GET',
      headers: {
        'Content-Type' : 'application/json'
      }
    });
    let data = await response.json();
    if(response.status === 200) {
      console.log("data" + data)
      console.log('dados' + dados)
      setDados(data)
    } else {
      console.log("Erro na requisição")
    }
    }catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    if (dados) {
      form.setFieldsValue({
        logradouro: dados.logradouro,
        complemento: dados.complemento,
        bairro: dados.bairro,
        localidade: dados.localidade,
        uf: dados.uf,
      });
    }
  }, [dados]);

  return (
    <Form
      layout='vertical'
      form={form}
      name="search-cep"
      onFinish={onSubmit}
      style={{ 
        minWidth: 100, 
        width: 400,
        paddingLeft: 20,
        paddingRight: 20 }}
    >
      <Form.Item 
      name="cep" 
      label="CEP" 
      rules={[{ required: true, message: msg }]}>
        <Input placeholder='Digite um CEP:' />
      </Form.Item>

      <Form.Item
      name="logradouro" 
      label="Logradouro" rules={[{ required: false }]}>
        <Input/>
      </Form.Item>

      <Form.Item
      name="complemento" 
      label="Complemento" rules={[{ required: false }]}>
        <Input />
      </Form.Item>

      <Form.Item
      name="bairro" 
      label="Bairro" rules={[{ required: false }]}>
        <Input />
      </Form.Item>

      <Form.Item
      name="localidade" 
      label="Localidade" rules={[{ required: false }]}>
        <Input/>
      </Form.Item>

      <Form.Item
      name="uf" 
      label="UF" rules={[{ required: false }]}>
        <Input />
      </Form.Item>


      <Form.Item {...tailLayout}>
        <Button type="primary" htmlType="submit">
          Enviar
        </Button>
        <Button htmlType="button" onClick={onReset}>
          Limpar
        </Button>
      </Form.Item>
    </Form>
  );
};

export default ModelForm;