import { NullTemplateVisitor } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, Validators } from '@angular/forms';
import { EvaluationService } from 'src/app/services/evaluation.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit {

  constructor(
    private fb:FormBuilder,
    private evaluationService:EvaluationService
  ) {
  }

  ngOnInit() {
    this.index= 0;
   this.addDetails();
  }

  index:number = 0;
  evaluationForm = this.fb.group({
    sex:[null,Validators.required],
    age:[null,Validators.required],
    educationalQualification:[null,Validators.required],
    serviceYear:[null,Validators.required],
    jobPosition:[null,Validators.required],
    dept:[null],
    employeeReaction:this.fb.array([
    ]),
    trainingApplication:this.fb.array([
    ]),
    employeePerformanceEvaluation:this.fb.array([]),
    inputEvaluation:this.fb.array([
    ]),
    processEvaluation:this.fb.array([
    ]),
    surveyQuestions:this.fb.array([
    ])
  });

  get employeeRxnControls()
  {
    return this.evaluationForm.get('employeeReaction') as FormArray;
  }

  get trainingAppControls()
  {
    return this.evaluationForm.get('trainingApplication') as FormArray;
  }

  get employeePerformanceEvaluationControls()
  {
    return this.evaluationForm.get('employeePerformanceEvaluation') as FormArray;
  }
  get inputEvaluationControls()
  {
    return this.evaluationForm.get('inputEvaluation') as FormArray;
  }

  get processEvaluationControls()
  {
    return this.evaluationForm.get('processEvaluation') as FormArray;
  }

  get serveyQuestionControls()
  {
    return this.evaluationForm.get('surveyQuestions') as FormArray;
  }

  employeeRxnParameter = [
    {
      criteria:this.fb.control('Trainings that I have taken helped me to improve my knowledge')
    },
    {
      criteria:this.fb.control('Methods of the training programs were very good ')
    },
    {
      criteria:this.fb.control('Trainings were relevant to my job ')
    },
    {
      criteria:this.fb.control('Coordination of the trainings  was effective ')
    },
    {
      criteria:this.fb.control('Presentation  styles  of  Instructors were effective.')
    },
    {
      criteria:this.fb.control('Knowledge of the trainers about the topics    is Good .')
    }
  ];

  trainingAppParameter = [
    {
      criteria:this.fb.control('I would  have been  able to have the same output without the training programs.')
    },
    {
      criteria:this.fb.control('What I learnt during the training program has helped me to have better  orientation about my work.')
    },
    {
      criteria:this.fb.control('The training program is aligned with the goal of the Bank.')
    },
    {
      criteria:this.fb.control('The training program helped me to better  adapt to my job and working environment.')
    }
  ];

  inputEvaluationParameter = [
    {
      criteria:'Individuals personal development plans are assessed during training need assessment.'
    },
    {
      criteria:'The Bank collects need assessment information from many sources in a number of ways.'
    },
    {
      criteria:'HR &SS  Department  designs specific questionnaire  for each training  and it was up to the standard format.'
    },
    {
      criteria:'The training methods and techniques employed are meaningful and facilitate learning.'
    },
    {
      criteria:'The trainers have subject matter expertise ,ability to communicate their knowledge clearly, interpersonal skills, ability  to motivate others.'
    },
    {
      criteria:'Employees   participated in self-study training and learning programs.'
    },
    {
      criteria:'Training program conducted by outside trainer was more effective and efficient than training program provided by inside trainer.'
    },
    {
      criteria:'Refreshment and related facility were up to standard.'
    }
  ];

  processEvaluationParameter = [
    {
      criteria:'The Bank always issues induction training plan to each new employees.'
    },
    {
      criteria:'Employees’ aims, desires and special talents (Current and Dormant ) needs are assessed during training need assessment.'
    },
    {
      criteria:'HR &SS department provides training that employees like to have  for their own personal interest, development and fulfilment.'
    },
    {
      criteria:'Have you participated in special training program like training for young employees, training designed for women employees or training programs which is significant but not related with the job '
    }
  ];

  employeePerformanceEvaluationParameter = [
    {
      criteria:'Do you think that work knowledge is increased through the training programs?'
    },
    {
      criteria:'The training provided by the organization helped me to perform my work quickly and efficiently.'
    },
    {
      criteria:'Because of the knowledge, skills and attitude received from the training, I can accomplish activities without wastage of time.'
    },
    {
      criteria:'The training increased  my  motivation to the job.'
    },
    {
      criteria:'What I learnt during the training program enabled me to solve obstacle I face at work'
    },
    {
      criteria:'The training enabled me to identify my strength and weakness.'
    }
  ];

  surveyQuestionParameters = [
    {
      criteria:'Was the overall training course/seminar beneficial to your work?'
    },
    {
      criteria:'Is there any specific knowledge that you have used on your work after the training?'
    },
    {
      criteria:'Did you incorporate anything else you learned in the training course in to your work?'
    },
    {
      criteria:'Is there anything which has changed your perception, attitude or behaviour as a result of the training course?'
    },
    {
      criteria:'Do you have any recommendation or other comments on the training course?'
    },
    {
      criteria:'What do you prefer among internal (in house) or external (outsourced) training programs?'
    }
  ];

  onGetStarted()
  {
    this.index = 1;
  }
  onNext()
  {
    this.index += 1;
  }

  onPrevious()
  {
    this.index -= 1;
  }

  addDetails()
  {
    this.employeeRxnParameter.forEach(parameter =>
      {
        this.employeeRxnControls.push(this.fb.group({
          criteria:parameter.criteria,
          point:0
        }))
      });

    this.trainingAppParameter.forEach(parameter =>
        {
          this.trainingAppControls.push(this.fb.group({
            criteria:parameter.criteria,
            point:0
          }))
    });
    this.employeePerformanceEvaluationParameter.forEach(parameter =>
      {
        this.employeePerformanceEvaluationControls.push(this.fb.group({
          criteria:parameter.criteria,
          point:0
        }))
  });

  this.inputEvaluationParameter.forEach(parameter =>
    {
      this.inputEvaluationControls.push(this.fb.group({
        criteria:parameter.criteria,
        point:0
      }))
});

this.processEvaluationParameter.forEach(parameter =>
  {
    this.processEvaluationControls.push(this.fb.group({
      criteria:parameter.criteria,
      response:null
    }))
});

this.surveyQuestionParameters.forEach(parameter =>
  {
    this.serveyQuestionControls.push(this.fb.group({
      criteria:parameter.criteria,
      response:null,
      reason:null
    }))
});
  }

  newForm = this.fb.group({
    evaluation:this.fb.control(null)
  })

  onSubmitForm()
  {
    this.employeeRxnControls.value.forEach(
      (detail) => {
        detail.point = parseInt(detail.point, 10);
      }
    );

    this.trainingAppControls.value.forEach(
      (detail) => {
        detail.point = parseInt(detail.point, 10);
      }
    );

    this.employeePerformanceEvaluationControls.value.forEach(
      (detail) => {
        detail.point = parseInt(detail.point, 10);
      }
    );

    this.inputEvaluationControls.value.forEach(
      (detail) => {
        detail.point = parseInt(detail.point, 10);
      }
    );

    this.processEvaluationControls.value.forEach(
      (detail) => {
        if(detail.response === 'true')
        {
          detail.response = true
        }

        else
        {
          detail.response = false

        }
      }
    );

    this.serveyQuestionControls.value.forEach(
      (detail) => {
        if(detail.response === 'true')
        {
          detail.response = true
        }

        else
        {
          detail.response = false

        }
      }
    );
    this.index = 7;
    console.log(this.evaluationForm.value);
    this.newForm.get('evaluation').setValue(this.evaluationForm.value)
    this.evaluationService.evaluate(this.newForm.value)
    .subscribe(res =>
      {
        this.evaluationForm = this.fb.group({
          sex:[null],
          age:[null],
          educationalQualification:[null],
          serviceYear:[null],
          jobPosition:[null],
          dept:[null],
          employeeReaction:this.fb.array([
          ]),
          trainingApplication:this.fb.array([
          ]),
          employeePerformanceEvaluation:this.fb.array([]),
          inputEvaluation:this.fb.array([
          ]),
          processEvaluation:this.fb.array([
          ]),
          surveyQuestions:this.fb.array([
          ])
        });
      })
  }


}
