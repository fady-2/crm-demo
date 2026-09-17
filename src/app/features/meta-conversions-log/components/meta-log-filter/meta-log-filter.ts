import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-meta-log-filter',
  imports: [ReactiveFormsModule],
  templateUrl: './meta-log-filter.html',
  styleUrl: './meta-log-filter.scss',
})
export class MetaLogFilter {
  private fb = inject(FormBuilder);
  status = [
    {
      value: 1,
      name: 'Sent',
    },
    {
      value: 2,
      name: 'Pending',
    },
    {
      value: 3,
      name: 'Failed',
    }
  ];
  action = [
    {
      value: 1,
      name: 'Follow Up',
    },
    {
      value: 2,
      name: 'Meeting Action',
    },
    {
      value: 3,
      name: 'Lead Action',
    }
  ];
  name = [
    {
      value: 1,
      name: 'Ahmed',
    },
    {
      value: 2,
      name: 'Sara',
    }
  ]
  filterLog = this.fb.group({
    status: [null],
    action: [null],
    name: [null],
  })

  onSubmit() {
    console.log(this.filterLog.value);
  }
  onReset() {
    this.filterLog.reset();
  }
  onClose() {}
}
