import { Button, Form, Input, Alert, Space} from 'antd';
import React, { useState, useEffect } from 'react';
import styles from './ModelForm.module.css'


const msg = "Por favor, preencha este campo!"


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
  const [msgError, setMsgError] = useState(false)
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
    if(!data.erro) {
      setDados(data)
      setMsgError(false)
    } else {
      console.log("Erro na requisição")
      setMsgError(true)
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
  }, [dados, form]);

  return (
    <>
    
    <Form
      className={styles.form}
      layout='vertical'
      form={form}
      name="search-cep"
      onFinish={onSubmit}
      
    >
      <Form.Item 
      name="cep" 
      label="CEP" 
      rules={[{ required: true, message: msg }]}>
        <Input placeholder='Informe um CEP:' />
      </Form.Item>

      <Form.Item
      name="logradouro" 
      label="Logradouro" rules={[{ required: false }]}>
        <Input placeholder='Informe o nome da rua:'/>
      </Form.Item>

      <Form.Item
      name="complemento" 
      label="Complemento" rules={[{ required: false }]}>
        <Input placeholder='Ex: Próximo a praça:'/>
      </Form.Item>

      <Form.Item
      name="bairro" 
      label="Bairro" rules={[{ required: false }]}>
        <Input placeholder='Informe o nome do bairro:'/>
      </Form.Item>

      <Form.Item
      name="localidade" 
      label="Localidade" rules={[{ required: false }]}>
        <Input placeholder='Informe o nome da cidade:'/>
      </Form.Item>

      <Form.Item
      name="uf" 
      label="UF" rules={[{ required: false }]}>
        <Input placeholder='Informe a UF:'/>
      </Form.Item>

      <Space direction="vertical" style={{ width: '100%' }}>
        {msgError && (
          <Alert
            className={styles.msgErro}
            message="CEP inválido"
            type="error"
            showIcon
            closable
          />
        )}
      
      </Space>


      <Form.Item {...tailLayout}>
        <Button type="primary" htmlType="submit">
          Enviar
        </Button>
        <Button htmlType="button" onClick={onReset}>
          Limpar
        </Button>
      </Form.Item>
    </Form>
    </>
  );
};

export default ModelForm;