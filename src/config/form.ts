export default [
  {
    type: 'input',
    typeName: '单行文本',
    label: '单行文本',
    defaultvalue: '单行文本',
    disabled: false,
    extra: {
      placeholder: '请输入',
      minLength: 0,
      maxLength: 0
    },
    rules: {
      required: false,
      pattern: {
        邮箱: '',
        手机号: /^1\d{10}$/,
        身份证: '',
        金额: '',
        自定义: ''
      }
    }
  },
  {
    type: 'textarea',
    typeName: '多行文本',
    label: '多行文本',
    defaultvalue: '多行文本',
    disabled: false,
    extra: {
      placeholder: '请输入',
      minLength: 0,
      maxLength: 0
    },
    rules: {
      required: false,
      pattern: ''
    }
  },
  {
    type: 'number',
    typeName: '数字框',
    label: '数字框',
    defaultvalue: 0,
    disabled: false,
    extra: {
      min: 0,
      max: 0,
      step: 1
    },
    rules: {
      required: false
    }
  },
  {
    type: 'radio',
    typeName: '单选框',
    label: '单选框',
    defaultvalue: 0,
    disabled: false,
    extra: {
      options: [
        {
          value: 'Option 1',
          label: 'Option 1'
        },
        {
          value: 'Option 2',
          label: 'Option 2'
        },
        {
          value: 'Option 3',
          label: 'Option 3'
        }
      ]
    },
    rules: {
      required: false
    }
  },
  {
    type: 'checkbox',
    typeName: '多选框',
    label: '多选框',
    defaultvalue: 0,
    disabled: false,
    extra: {
      options: [
        {
          value: 'Option 1',
          label: 'Option 1'
        },
        {
          value: 'Option 2',
          label: 'Option 2'
        },
        {
          value: 'Option 3',
          label: 'Option 3'
        }
      ]
    },
    rules: {
      required: false
    }
  },
  {
    type: 'select',
    typeName: '选择框',
    label: '选择框',
    defaultvalue: 0,
    disabled: false,
    extra: {
      options: [
        {
          value: 'Option 1'
        },
        {
          value: 'Option 2'
        },
        {
          value: 'Option 3'
        }
      ],
      multiple: false,
      clearable: true,
      filterable: false,
      props: {
        value: 'value',
        label: 'label'
      }
    },
    rules: {
      required: false
    }
  },
  {
    type: 'date',
    typeName: '日期框',
    label: '日期框',
    defaultvalue: '',
    disabled: false,
    extra: {
      format: 'yyyy-MM-dd',
      timestamp: false,
      placeholder: '',
      startPlaceholder: '',
      endPlaceholder: '',
      clearable: true,
      isRange: false
    },
    rules: {
      required: false
    }
  },
  {
    type: 'switch',
    typeName: '开关',
    label: '开关',
    defaultvalue: 0,
    disabled: false,
    rules: {
      required: false
    }
  },
  {
    type: 'text',
    typeName: '文字',
    label: '文字',
    defaultvalue: '文字'
  }
]
