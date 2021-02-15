import chai, {expect} from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';

chai.use(sinonChai);
import Validator from '@/validate';
import validate from '@/validate';

describe('validate', () => {
  it('存在.', () => {
    expect(Validator).to.exist;
  });
  it('required: true 报错', () => {
    let data = {
      email: ''
    };
    let rules = [
      {key: 'email', required: true}
    ];
    let validator = new Validator()
    let errors = validator.validate(data, rules);
    console.log(errors);
    expect(errors.email.required).to.eq('必填');
  });
  it('required：true通过', () => {
    let data = {
      email: '11111'
    };
    let rules = [
      {key: 'email', required: true}
    ];
    let validator = new Validator()
    let errors = validator.validate(data, rules);
    expect(errors.email).to.not.exist;
  });
  it('pattern 报错', () => {
    let data = {
      email: '@yu.com'
    };
    let rules = [
      {key: 'email', pattern: /^.+@.+$/}
    ];
    let validator = new Validator()
    let errors = validator.validate(data, rules);
    expect(errors.email.pattern).to.eq('格式不正确');
  });
  it('pattern 通过', () => {
    let data = {
      email: '1@yu.com'
    };
    let rules = [
      {key: 'email', pattern: /^.+@.+$/}
    ];
    let validator = new Validator()
    let errors = validator.validate(data, rules);
    expect(errors.email).to.not.exist;
  });
  it('pattern email 报错', () => {
    let data = {
      email: '@yu.com'
    };
    let rules = [
      {key: 'email', pattern: 'email'}
    ];
    let validator = new Validator()
    let errors = validator.validate(data, rules);
    expect(errors.email.pattern).to.eq('格式不正确');
  });
  it('pattern email 通过', () => {
    let data = {
      email: '@yu.com'
    };
    let rules = [
      {key: 'email', pattern: 'email'}
    ];
    let validator = new Validator()
    let errors = validator.validate(data, rules);
    expect(errors.email.pattern).to.eq('格式不正确');
  });
  it('required pattern ', () => {
    let data = {
      email: ''
    };
    let rules = [
      {key: 'email', pattern: 'email', required: true}
    ];
    let validator = new Validator()
    let errors = validator.validate(data, rules);
    expect(errors.email).to.exist;
    expect(errors.email.pattern).to.not.exist;
  });
  it('required & minLength ', () => {
    let data = {
      email: ''
    };
    let rules = [
      {key: 'email', pattern: 'email', minLength: 6}
    ];
    let validator = new Validator()
    let errors = validator.validate(data, rules);
    expect(errors.email.minLength).to.exist;
    expect(errors.email.pattern).to.exist;
    //  报两个错，errors = {email: {pattern: '格式不正确', required: '必填'}}
    //  required
    //  pattern
    //  其他
  });
  it('maxLength ', () => {
    let data = {
      email: '12312312311'
    };
    let rules = [
      {key: 'email', pattern: 'email', maxLength: 10}
    ];
    let validator = new Validator()
    let errors = validator.validate(data, rules);
    expect(errors.email.maxLength).to.exist;
  });
  it('many keys', () => {
    let data = {
      email: '12312312311'
    };
    let rules = [
      {
        key: 'email',
        required: true,
        minLength: 6,
        maxLength: 20,
        hasNumber: true,
        hasLowerCaseAndUpperCase: true,
        hasDot: true,
        hasUnderscore: true
      }
    ];

    let fn = () => {
      let validator = new Validator()
      validator.validate(data, rules);
    }
    expect(fn).to.throw()


  });
  it('自定义测试规则', () => {
    let data = {
      email: 'abcabcbacba'
    };
    let validator = new Validator()
    validator.hasNumber = (value) => {
      if(!/\d/.test(value)) {
        return '必须含有数字'
      }
    }
    let rules = [
      {
        key: 'email',
        required: true,
        minLength: 6,
        maxLength: 20,
        hasNumber: true,
        // hasLowerCaseAndUpperCase: true,
        // hasDot: true,
        // hasUnderscore: true
      }
    ];
    let errors;
    let fn = () => {
      errors = validator.validate(data, rules);
    }
    expect(fn).to.not.throw()
    expect(errors.email.hasNumber).to.eq('必须含有数字')
  });
  it('可以全局添加新规则', () => {
    let data = {
      email: 'abcabcbacba'
    };
    let validator1 = new Validator()
    let validator2 = new Validator()
    Validator.add('hasNumber', (value) => {
      if(!/\d/.test(value)) {
        return '必须含有数字'
      }
    })
    let rules = [
      {
        key: 'email',
        required: true,
        minLength: 6,
        maxLength: 20,
        hasNumber: true,
        // hasLowerCaseAndUpperCase: true,
        // hasDot: true,
        // hasUnderscore: true
      }
    ];
    let errors;
    expect(() => {
      validator1.validate(data, rules)
    }).to.not.throw()
    expect(() => {
      validator2.validate(data, rules)
    }).to.not.throw()
  });

  let demoRule = {
    key: 'xxx',
    required: true,
    minLength: 6,
    maxLength: 20,
    hasNumber: true,
    hasLowerCaseAndUpperCase: true,
    hasDot: true,
    hasUnderscore: true
  };
});
