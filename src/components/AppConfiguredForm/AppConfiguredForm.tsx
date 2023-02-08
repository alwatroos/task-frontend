/**
 * Copyright alwatroos
 * https://github.com/alwatroos
 */
import { Button, Form, Input } from "antd";
import { AppLabel } from "components/AppLabel";
import { Flex } from "components/Flex";
import { useResolution } from "hooks";
import { useCallback, useMemo } from "react";
import "./AppConfiguredForm.scss";
import { IAppConfiguredFormProps } from "./types";

export function AppConfiguredForm<T>({
  config,
  title,
  fieldsDirection = "column",
}: IAppConfiguredFormProps<T>) {
  const resolution = useResolution();
  const isHighRes = useMemo(() => resolution === "high", [resolution]);
  return (
    <Form
      className={"AppConfiguredForm"}
      autoComplete="on"
      name={config.formName}
      onFinish={config.onSubmit}
      onFinishFailed={config.onSubmitFailed}
      labelCol={{ span: 6 }}
      size="small"
      title={title}>
      <Flex mode={fieldsDirection}>
        {config.fields.map(
          ({
            name,
            placeholder,
            type,
            multiline = false,
            customElement,
            rules,
          }) => (
            <Form.Item
              className="AppConfiguredForm__item"
              key={`${config.formName}--${name}--input`}
              label={isHighRes ? placeholder : undefined}
              name={name}
              rules={rules}
              wrapperCol={isHighRes ? { offset: 1, span: 16 } : undefined}>
              {customElement ?? (
                <Input
                  type={type}
                  multiple={multiline}
                  placeholder={isHighRes ? undefined : placeholder}
                />
              )}
            </Form.Item>
          ),
        )}
      </Flex>

      <Form.Item className="AppConfiguredForm__button">
        <Button type="primary" htmlType="submit">
          {config.buttonText}
        </Button>
      </Form.Item>
    </Form>
  );
}
